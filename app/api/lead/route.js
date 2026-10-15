import {NextResponse} from "next/server";
import {buildLeadMessage, buildWhatsappUrl, WHATSAPP_NUMBER} from "@/app/config/whatsapp.config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({nome, empresa, email, telefone}) {
    const errors = {};
    if (!String(nome ?? "").trim()) errors.nome = "Informe o nome.";
    if (!String(empresa ?? "").trim()) errors.empresa = "Informe a empresa.";
    if (!EMAIL_PATTERN.test(String(email ?? "").trim())) errors.email = "E-mail inválido.";
    if (String(telefone ?? "").replace(/\D/g, "").length < 10) errors.telefone = "Telefone inválido.";
    return errors;
}

async function forwardToWhatsAppCloud(body) {
    const token = process.env.WHATSAPP_CLOUD_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const to = process.env.WHATSAPP_LEAD_TO;
    if (!token || !phoneNumberId || !to) return {skipped: true};

    const response = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to,
            type: "text",
            text: {body},
        }),
    });

    if (!response.ok) {
        throw new Error(`WhatsApp Cloud API respondeu ${response.status}`);
    }
    return {sent: true};
}

export async function POST(request) {
    let data;
    try {
        data = await request.json();
    } catch {
        return NextResponse.json({ok: false, error: "Payload inválido."}, {status: 400});
    }

    const lead = {
        nome: String(data?.nome ?? "").trim(),
        empresa: String(data?.empresa ?? "").trim(),
        email: String(data?.email ?? "").trim(),
        telefone: String(data?.telefone ?? "").trim(),
        mensagem: String(data?.mensagem ?? "").trim(),
    };

    const errors = validate(lead);
    if (Object.keys(errors).length > 0) {
        return NextResponse.json({ok: false, errors}, {status: 422});
    }

    const message = buildLeadMessage(lead);

    try {
        await forwardToWhatsAppCloud(message);
    } catch (error) {
        console.error("[lead] falha ao encaminhar para WhatsApp Cloud API:", error.message);
    }

    return NextResponse.json({
        ok: true,
        whatsappUrl: buildWhatsappUrl(message, WHATSAPP_NUMBER),
    });
}
