import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import SharedUnidadesSection from "@/app/components/shared/SharedUnidadesSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { rtConfig } from "@/app/config/rt.config";

export const metadata = {
    title: "Unidades do Residencial Terapêutico",
    description: "Conheça nossas unidades de Residencial Terapêutico em Blumenau e Chapecó. Ambientes seguros, acolhedores e com acompanhamento especializado 24 horas.",
    keywords: [
        "Unidades Residencial Terapêutico",
        "Residência Terapêutica Blumenau",
        "Residência Terapêutica Chapecó",
        "Acolhimento Terapêutico",
        "Saúde Mental"
    ],
};

export default function UnidadesRT() {
    return (
        <main className="min-h-screen">
            <SharedNavbar config={rtConfig} />
            <SharedUnidadesSection config={rtConfig} />
            <WhatsAppButton />
            <SharedFooter config={rtConfig} />
        </main>
    );
}
