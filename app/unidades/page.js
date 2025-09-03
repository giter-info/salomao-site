import RootNavbar from "@/app/components/root/Navbar";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import Footer from "@/app/components/root/Footer";
import UnitsHeroSection from "@/app/components/root/UnitsHeroSection";
import UnitsCards from "@/app/components/root/UnitsCards";

export default function Page() {
    return (
        <>
            <RootNavbar/>
            <UnitsHeroSection />
            <UnitsCards />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}