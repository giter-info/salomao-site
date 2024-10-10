import Navbar from "@/app/components/Navbar";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from "@/app/components/Footer";
import EstruturaPageComponent from "@/app/estrutura/PageComponent";

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