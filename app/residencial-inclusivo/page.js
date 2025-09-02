// Importing components, ensure these paths are correct
import Navbar from "@/app/components/layout/Navbar";
import HomeSection from "@/app/components/home/HomeSection";
import SobreSection from "@/app/components/home/SobreSection";
import ServicesSection from "@/app/components/home/ServicesSection";
import Footer from "@/app/components/layout/Footer";
import DiferenciaisSection from "@/app/components/home/DiferenciaisSection";
import EstruturaSection from "@/app/components/home/EstruturaSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            {/*<SobreSection/>*/}
            {/*<DiferenciaisSection/>*/}
            {/*<ServicesSection/>*/}
            {/*<EstruturaSection/>*/}
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}