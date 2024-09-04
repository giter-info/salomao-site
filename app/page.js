import Navbar from "@/app/components/Navbar";
import HomeSection from "@/app/components/HomeSection";
import SobreSection from "@/app/components/SobreSection";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/Contactsession";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar/>
            <HomeSection/>
            <SobreSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
        </>
    );
}
