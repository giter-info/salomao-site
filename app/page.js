import RootNavbar from "@/app/components/root/Navbar";
import HomeSection from "@/app/components/root/HomeSection";
import Footer from "@/app/components/root/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";

export default function Home() {
    return (
        <>
            <RootNavbar/>
            <HomeSection/>
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}