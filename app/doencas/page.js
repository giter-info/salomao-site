import Navbar from "@/app/components/layout/Navbar";
import DoencasPageComponent from "@/app/components/doencas/PageComponent";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <DoencasPageComponent />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}