import Navbar from "@/app/components/rt/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/rt/Footer";
import FaqPageComponent from "@/app/components/rt/faq/PageComponent";

const commonTitle = "Dúvidas Frequentes - Residencial Terapêutico Salomão";
const commonDescription =
    "Respostas para suas perguntas.";
const commonUrl = "https://redesalomao.com.br/faq";
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
            <FaqPageComponent/>
            <WhatsAppButton/>
            <Footer/>
        </>

    );
}