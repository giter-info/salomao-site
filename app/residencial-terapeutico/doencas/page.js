import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import DoencasPageComponent from "@/app/components/rt/doencas/PageComponent";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { rtConfig } from "@/app/config/rt.config";

export const metadata = {
    title: "Doenças Atendidas",
    description: "Veja os principais transtornos psicóticos e de humor atendidos pelo Residencial Terapêutico Salomão. Apoio clínico especializado para Esquizofrenia, Bipolaridade e Depressão Grave.",
    keywords: [
        "Doenças Atendidas",
        "Transtornos Psicóticos",
        "Esquizofrenia",
        "Transtorno Bipolar",
        "Depressão Grave com Psicose",
        "Apoio Psiquiátrico"
    ],
};

export default function Home() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <DoencasPageComponent />
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>
    );
}
