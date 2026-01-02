import Navbar from "@/app/components/as/Navbar";
import HomeSection from "@/app/components/as/HomeSection";
import Footer from "@/app/components/as/Footer";
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