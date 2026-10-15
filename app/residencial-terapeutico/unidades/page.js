import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import SharedUnidadesSection from "@/app/components/shared/SharedUnidadesSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import JsonLd from "@/app/components/layout/JsonLd";
import { rtConfig } from "@/app/config/rt.config";
import { localBusinessSchema, SITE_URL } from "@/app/config/seo.config";

const UNIDADES_SCHEMA = [
    {
        id: "blumenau",
        name: "Residencial Terapêutico — Unidade Blumenau",
        description: "Residencial Terapêutico no bairro Itoupavazinha, Blumenau, com acompanhamento especializado 24 horas.",
        address: {street: "Rua Dr. Pedro Zimmermann, 2391 - Itoupavazinha", city: "Blumenau"},
    },
    {
        id: "chapeco",
        name: "Residencial Terapêutico — Unidade Chapecó",
        description: "Residencial Terapêutico no centro de Chapecó, com acompanhamento especializado 24 horas.",
        address: {street: "Rua Ponoe Scheffer, 114 - Centro", city: "Chapecó"},
    },
].map((u) =>
    localBusinessSchema({
        ...u,
        url: `${SITE_URL}/residencial-terapeutico/unidades`,
    })
);

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
            {UNIDADES_SCHEMA.map((schema, i) => (
                <JsonLd key={i} data={schema} />
            ))}
            <SharedNavbar config={rtConfig} />
            <SharedUnidadesSection config={rtConfig} />
            <WhatsAppButton />
            <SharedFooter config={rtConfig} />
        </main>
    );
}
