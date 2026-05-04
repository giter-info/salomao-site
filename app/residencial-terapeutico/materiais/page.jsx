import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import MateriaisPageComponent from "@/app/components/rt/materiais/PageComponent";
import { rtConfig } from "@/app/config/rt.config";

const commonTitle = "Materiais úteis - Residencial Terapêutico Salomão";
const commonDescription =
    "Materiais sobre Residência Terapêutica";
const commonUrl = "https://redesalomao.com.br/materiais";
const commonImage = "https://redesalomao.com.br/capa-2.jpg";
const commonImageDetails = {
    url: commonImage,
    width: 1200,
    height: 630,
    alt: "Imagem de prévia do site.",
};

export const metadata = {
    title: commonTitle,
    description: commonDescription,
    openGraph: {
        type: "website",
        title: commonTitle,
        description: commonDescription,
        url: commonUrl,
        images: [commonImageDetails],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: commonTitle,
        description: commonDescription,
        images: [commonImage],
        image_alt: "Imagem de prévia do site no Twitter",
    },
    author: "Je4nPw",
    keywords: [
        "Residencial Terapêutico",
        "Transtornos Mentais",
        "Residencial",
        "desospitalização",
        "antimanicomial",
        "raps",
        "rede de atenção psicossocial",
        "contato"
    ],
};

export default function SaibaMaisPage() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <MateriaisPageComponent/>
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>

    );
}
