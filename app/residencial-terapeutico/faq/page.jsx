import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import FaqPageComponent from "@/app/components/rt/faq/PageComponent";
import { rtConfig } from "@/app/config/rt.config";

export const metadata = {
    title: "Perguntas Frequentes",
    description: "Tire suas dúvidas sobre o Residencial Terapêutico Salomão. Entenda a diferença de clínicas psiquiátricas, lares de idosos e comunidades terapêuticas.",
    keywords: [
        "Perguntas Frequentes",
        "Dúvidas Residencial Terapêutico",
        "Saúde Mental FAQ",
        "Internação Psiquiátrica",
        "Moradia Assistida",
        "Rede Salomão"
    ],
};

export default function SaibaMaisPage() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <FaqPageComponent/>
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>

    );
}