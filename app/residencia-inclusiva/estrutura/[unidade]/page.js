import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import EstruturaPageComponent, { EstruturaContent } from "@/app/components/rt/estrutura/PageComponent";
import EstruturaGridComponent from "@/app/components/rt/estrutura/EstruturaGridComponent";
import { riConfig } from "@/app/config/ri.config";
import { notFound } from "next/navigation";

export default async function UnidadeEstruturaPage({ params }) {
    const { unidade: unidadeId } = await params;
    const unidade = riConfig.unidades.find(u => u.id === unidadeId);

    if (!unidade) {
        notFound();
    }

    return (
        <>
            <SharedNavbar config={riConfig} />
            <EstruturaPageComponent config={riConfig} unidade={unidade} />
            <EstruturaContent config={riConfig}>
                <EstruturaGridComponent images={unidade.imagens} theme={riConfig.theme} />
            </EstruturaContent>
            <WhatsAppButton />
            <SharedFooter config={riConfig} />
        </>
    );
}
