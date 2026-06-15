import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import ApresentacaoRiClient from "./ApresentacaoRiClient";
import { riConfig } from "@/app/config/ri.config";

export const metadata = {
    title: "Apresentação da Residência Inclusiva - Rede Salomão",
    description: "Conheça a proposta técnica da Residência Inclusiva Salomão. Entenda os nossos objetivos de acolhimento, infraestrutura física acessível e equipe de referência.",
    keywords: [
        "Apresentação Residência Inclusiva",
        "Residência Inclusiva Salomão",
        "Acolhimento Deficientes",
        "Acessibilidade NBR 9050",
        "Rede Salomão",
        "Plano de Atendimento Singular"
    ],
};

export default function Page() {
    return (
        <>
            <SharedNavbar config={riConfig} />
            <ApresentacaoRiClient />
            <WhatsAppButton/>
            <SharedFooter config={riConfig} />
        </>
    );
}
