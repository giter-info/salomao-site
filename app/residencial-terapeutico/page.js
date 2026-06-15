import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedHomeSection from "@/app/components/shared/SharedHomeSection";
import SharedSobreSection from "@/app/components/shared/SharedSobreSection";
import ServicesSection from "@/app/components/rt/ServicesSection";
import SharedFooter from "@/app/components/shared/SharedFooter";
import DiferenciaisSection from "@/app/components/rt/DiferenciaisSection";
import EstruturaSection from "@/app/components/rt/EstruturaSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { rtConfig } from "@/app/config/rt.config";

export const metadata = {
    title: "Residencial Terapêutico",
    description: "Moradia assistida com suporte 24h para portadores de transtornos mentais egressos de internações psiquiátricas. Estrutura acolhedora em Blumenau e Chapecó.",
    keywords: [
        "Residencial Terapêutico",
        "Saúde Mental",
        "Moradia Assistida",
        "Reabilitação Psicossocial",
        "Blumenau",
        "Chapecó",
        "Santa Catarina"
    ],
};

export default function Home() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <SharedHomeSection config={rtConfig} />
            <SharedSobreSection config={rtConfig} />
            <DiferenciaisSection/>
            <ServicesSection/>
            <EstruturaSection/>
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>
    );
}
