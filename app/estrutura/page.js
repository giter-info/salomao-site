import Navbar from "@/app/components/layout/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/layout/Footer";
import EstruturaPageComponent from "@/app/components/estrutura/PageComponent";

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