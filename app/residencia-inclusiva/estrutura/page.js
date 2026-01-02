import Navbar from "@/app/components/ri/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/ri/Footer";
import EstruturaPageComponent from "@/app/components/ri/estrutura/PageComponent";

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