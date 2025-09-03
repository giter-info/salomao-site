import Navbar from "@/app/components/ri/Navbar";
import HomeSection from "@/app/components/ri/HomeSection";
import Footer from "@/app/components/ri/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}