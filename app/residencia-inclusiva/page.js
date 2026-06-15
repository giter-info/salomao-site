import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedHomeSection from "@/app/components/shared/SharedHomeSection";
import SharedSobreSection from "@/app/components/shared/SharedSobreSection";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { riConfig } from "@/app/config/ri.config";

export const metadata = {
    title: "Residência Inclusiva",
    description: "Serviço de acolhimento institucional para jovens e adultos com deficiência em Blumenau. Foco na qualidade de vida, cidadania e promoção da autonomia.",
    keywords: [
        "Residência Inclusiva",
        "Acolhimento Deficientes",
        "Inclusão Social Blumenau",
        "Apoio a Pessoas com Deficiência",
        "Rede Salomão"
    ],
};

export default function Home() {
    return (
        <>
            <SharedNavbar config={riConfig} />
            <SharedHomeSection config={riConfig} />
            <SharedSobreSection config={riConfig} />
            <WhatsAppButton/>
            <SharedFooter config={riConfig} />
        </>
    );
}
