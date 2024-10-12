import Navbar from "@/app/components/Navbar";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import Footer from "@/app/components/Footer";
import SaibaMaisPageComponent from "@/app/saibamais/PageComponent";

export default function SaibaMaisPage() {
    return (
        <>
            <Navbar/>
            <SaibaMaisPageComponent/>
            <WhatsAppButton/>
            <Footer/>
        </>

    );
}