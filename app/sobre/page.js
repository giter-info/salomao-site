import RootNavbar from "@/app/components/root/Navbar";
import AboutCards from "@/app/components/root/AboutCards"
import Footer from "@/app/components/root/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import AboutHeroSection from "@/app/components/root/AboutHeroSection";

export const metadata = {
    title: "Sobre Nós",
    description: "Conheça a história e o compromisso da Rede Salomão com o bem-estar, a inclusão social e o acolhimento terapêutico de excelência em Santa Catarina.",
    keywords: ["Quem somos", "História", "Missão", "Valores", "Rede Salomão", "Acolhimento", "Inclusão"],
};

export default function Page() {
    return (
        <>
            <RootNavbar/>
            <AboutHeroSection />
            <AboutCards />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}