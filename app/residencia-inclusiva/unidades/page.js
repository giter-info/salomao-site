import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import SharedUnidadesSection from "@/app/components/shared/SharedUnidadesSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import JsonLd from "@/app/components/layout/JsonLd";
import { riConfig } from "@/app/config/ri.config";
import { localBusinessSchema, SITE_URL } from "@/app/config/seo.config";

const UNIDADES_SCHEMA = [
    {
        id: "blumenau",
        name: "Residência Inclusiva — Unidade Blumenau",
        description: "Residência Inclusiva no bairro Fortaleza, Blumenau, dedicada à autonomia e bem-estar de pessoas com deficiência.",
        address: {street: "Rua Guilherme Lueders, 285 - Fortaleza", city: "Blumenau"},
    },
].map((u) =>
    localBusinessSchema({
        ...u,
        url: `${SITE_URL}/residencia-inclusiva/unidades`,
    })
);

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
            {UNIDADES_SCHEMA.map((schema, i) => (
                <JsonLd key={i} data={schema} />
            ))}
            <SharedNavbar config={riConfig} />
            <SharedUnidadesSection config={riConfig} />
            <WhatsAppButton />
            <SharedFooter config={riConfig} />
        </main>
    );
}
