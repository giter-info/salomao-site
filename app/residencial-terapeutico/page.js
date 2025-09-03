import Navbar from "@/app/components/rt/Navbar";
import HomeSection from "@/app/components/rt/HomeSection";
import SobreSection from "@/app/components/rt/SobreSection";
import ServicesSection from "@/app/components/rt/ServicesSection";
import Footer from "@/app/components/rt/Footer";
import DiferenciaisSection from "@/app/components/rt/DiferenciaisSection";
import EstruturaSection from "@/app/components/rt/EstruturaSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";

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