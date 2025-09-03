import RootNavbar from "@/app/components/root/Navbar";
import AboutCards from "@/app/components/root/AboutCards"
import Footer from "@/app/components/root/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import AboutHeroSection from "@/app/components/root/AboutHeroSection";

export default function Page() {
    return (
        <>
            <RootNavbar/>
            <AboutHeroSection />
            <AboutCards />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}