// Importing components, ensure these paths are correct
import Navbar from "@/app/components/Navbar";
import HomeSection from "@/app/components/HomeSection";
import SobreSection from "@/app/components/SobreSection";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import DiferenciaisSection from "@/app/components/DiferenciaisSection";
import EstruturaSection from "@/app/components/EstruturaSection";

const commonTitle = "Residencial Terapêutico Salomão";
;
const commonDescription = "Residência para portadores de transtornos mentais, egressos de internações psiquiátricas de longa permanência e hospitais de custódia.";
const commonUrl = "https://redesalomao.com.br/";
const commonImage = "https://redesalomao.com.br/capa.jpg";
const commonImageDetails = {
    url: commonImage,
    width: 600,
    height: 600,
    alt: "Imagem de prévia do site.",
};

export const metadata = {
    title: commonTitle,
    description: commonDescription,
    url: commonUrl,
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
        url: commonUrl,
        image: commonImage,
    },
    whatsapp: {
        title: commonTitle,
        description: commonDescription,
        image: commonImage,
    },
    author: "Je4nPw",
    keywords: ["Residencial Terapêutico", "Transtornos Mentais", "Residencial", "desospitalização"],
};

export default function Home() {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            <SobreSection/>
            <DiferenciaisSection/>
            <ServicesSection/>
            <EstruturaSection/>
            <ContactSection/>
            <Footer/>
        </>
    );
}