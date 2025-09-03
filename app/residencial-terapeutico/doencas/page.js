import Navbar from "@/app/components/rt/Navbar";
import DoencasPageComponent from "@/app/components/rt/doencas/PageComponent";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/rt/Footer";

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