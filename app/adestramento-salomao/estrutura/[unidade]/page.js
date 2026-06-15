import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import EstruturaPageComponent, { EstruturaContent } from "@/app/components/rt/estrutura/PageComponent";
import EstruturaGridComponent from "@/app/components/rt/estrutura/EstruturaGridComponent";
import { asConfig } from "@/app/config/as.config";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { unidade: unidadeId } = await params;
    const unidade = asConfig.unidades.find(u => u.id === unidadeId);

    if (!unidade) {
        return {
            title: "Estrutura do Centro de Treinamento",
        };
    }

    return {
        title: `Estrutura - ${unidade.nome}`,
        description: `Explore as instalações do ${unidade.nome} da Rede Salomão. Espaços dedicados para o treino, bem-estar e diversão do seu cão.`,
        keywords: [unidade.nome, "Adestramento Blumenau", "Centro de Treinamento Canino", "Galeria de Fotos"]
    };
}

export default async function UnidadeEstruturaPage({ params }) {
    const { unidade: unidadeId } = await params;
    const unidade = asConfig.unidades.find(u => u.id === unidadeId);

    if (!unidade) {
        notFound();
    }

    return (
        <>
            <SharedNavbar config={asConfig} />
            <EstruturaPageComponent config={asConfig} unidade={unidade} />
            <EstruturaContent config={asConfig}>
                <EstruturaGridComponent images={unidade.imagens} theme={asConfig.theme} />
            </EstruturaContent>
            <WhatsAppButton />
            <SharedFooter config={asConfig} />
        </>
    );
}
