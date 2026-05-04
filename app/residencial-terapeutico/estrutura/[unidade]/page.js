import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import EstruturaPageComponent, { EstruturaContent } from "@/app/components/rt/estrutura/PageComponent";
import EstruturaGridComponent from "@/app/components/rt/estrutura/EstruturaGridComponent";
import { rtConfig } from "@/app/config/rt.config";
import { notFound } from "next/navigation";

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
