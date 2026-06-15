import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import SharedUnidadesSection from "@/app/components/shared/SharedUnidadesSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { riConfig } from "@/app/config/ri.config";

export const metadata = {
    title: "Unidades da Residência Inclusiva",
    description: "Conheça nossas unidades de Residência Inclusiva em Blumenau. Ambientes seguros, estruturados e dedicados a promover o bem-estar e autonomia de jovens e adultos com deficiência.",
    keywords: [
        "Unidades Residência Inclusiva",
        "Acolhimento Deficiência Blumenau",
        "Residência Inclusiva Blumenau",
        "Cuidado e Inclusão"
    ],
};

export default function UnidadesRI() {
    return (
        <main className="min-h-screen">
            <SharedNavbar config={riConfig} />
            <SharedUnidadesSection config={riConfig} />
            <WhatsAppButton />
            <SharedFooter config={riConfig} />
        </main>
    );
}
