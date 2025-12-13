import Navbar from "@/app/components/rt/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/rt/Footer";
import EstruturaPageComponent from "@/app/components/rt/estrutura/PageComponent";

export default function Home() {
    return (
        <>
            <Navbar/>
            <EstruturaPageComponent />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}