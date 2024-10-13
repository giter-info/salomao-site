import Navbar from "@/app/components/layout/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/layout/Footer";
import MateriaisPageComponent from "@/app/components/materiais/PageComponent";

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
            <Navbar/>
            <MateriaisPageComponent/>
            <WhatsAppButton/>
            <Footer/>
        </>

    );
}