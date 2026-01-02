import Navbar from "@/app/components/ri/Navbar";
import HomeSection from "@/app/components/ri/HomeSection";
import SobreSection from "@/app/components/ri/SobreSection";
import Footer from "@/app/components/ri/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            <SobreSection/>
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}