// Importing components, ensure these paths are correct
import Navbar from "@/app/components/Navbar";
import HomeSection from "@/app/components/HomeSection";
import SobreSection from "@/app/components/SobreSection";
import ServicesSection from "@/app/components/ServicesSection";
import Footer from "@/app/components/Footer";
import DiferenciaisSection from "@/app/components/DiferenciaisSection";
import EstruturaSection from "@/app/components/EstruturaSection";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            <SobreSection/>
            <DiferenciaisSection/>
            <ServicesSection/>
            <EstruturaSection/>
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}