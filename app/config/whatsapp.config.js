export const WHATSAPP_NUMBER = "5547988080041";
export const WHATSAPP_MESSAGE = "Entrei em contato pelo novo site.";

export function buildWhatsappUrl(message = WHATSAPP_MESSAGE, phone = WHATSAPP_NUMBER) {
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

export function buildLeadMessage({nome, empresa, email, telefone, mensagem}) {
    return [
        "*Novo lead — Marketing Salomão*",
        "",
        `*Nome:* ${nome}`,
        `*Empresa:* ${empresa}`,
        `*E-mail:* ${email}`,
        `*Telefone:* ${telefone}`,
        `*Mensagem:* ${mensagem || "-"}`,
    ].join("\n");
}
