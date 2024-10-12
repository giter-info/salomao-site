import Navbar from "@/app/components/Navbar";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from "@/app/components/Footer";
import SaibaMaisPageComponent from "@/app/saibamais/PageComponent";

const commonTitle = "Residencial Terapêutico Salomão - Landing Page";
const commonDescription =
    "Respeitando o normal de cada um.";
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
        url: commonUrl, // Pode não ser necessário para OpenGraph
        images: [commonImageDetails],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: commonTitle,
        description: commonDescription,
        images: [commonImage], // Corrigido para plural
        image_alt: "Imagem de prévia do site no Twitter", // Adicionado alt
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