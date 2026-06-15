import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import EstruturaPageComponent, { EstruturaContent } from "@/app/components/rt/estrutura/PageComponent";
import EstruturaGridComponent from "@/app/components/rt/estrutura/EstruturaGridComponent";
import { rtConfig } from "@/app/config/rt.config";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { unidade: unidadeId } = await params;
    const unidade = rtConfig.unidades.find(u => u.id === unidadeId);

    if (!unidade) {
        return {
            title: "Estrutura do Residencial Terapêutico",
        };
    }

    return {
        title: `Estrutura - ${unidade.nome}`,
        description: `Conheça as instalações e a estrutura física da ${unidade.nome} do Residencial Terapêutico Salomão. Ambientes acolhedores, limpos e seguros.`,
        keywords: [unidade.nome, "Estrutura Residencial Terapêutico", "Galeria de Fotos", "Rede Salomão"]
    };
}

export default async function UnidadeEstruturaPage({ params }) {
    const { unidade: unidadeId } = await params;
    const unidade = rtConfig.unidades.find(u => u.id === unidadeId);

    if (!unidade) {
        notFound();
    }

    return (
        <>
            <SharedNavbar config={rtConfig} />
            <EstruturaPageComponent config={rtConfig} unidade={unidade} />
            <EstruturaContent config={rtConfig}>
                <EstruturaGridComponent images={unidade.imagens} theme={rtConfig.theme} />
            </EstruturaContent>
            <WhatsAppButton />
            <SharedFooter config={rtConfig} />
        </>
    );
}
