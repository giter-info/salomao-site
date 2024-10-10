import Navbar from "@/app/components/Navbar";
import AtendidasSection from "@/app/components/AtendidasSection";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <AtendidasSection />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}