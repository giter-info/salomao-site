import Navbar from "@/app/components/as/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/as/Footer";
import EstruturaPageComponent from "@/app/components/as/estrutura/PageComponent";

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