import Navbar from "@/app/components/rt/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/rt/Footer";
import SaibaMaisPageComponent from "@/app/components/saibamais/PageComponent";

const commonTitle = "Saiba Mais - Residencial Terapêutico Salomão";
const commonDescription =
    "Os transtornos podem ser controlados e organizados!";
const commonUrl = "https://redesalomao.com.br/saibamais";
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
            <SaibaMaisPageComponent/>
            <WhatsAppButton/>
            <Footer/>
        </>

    );
}