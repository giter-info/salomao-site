import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedHomeSection from "@/app/components/shared/SharedHomeSection";
import SharedSobreSection from "@/app/components/shared/SharedSobreSection";
import ServicesSection from "@/app/components/rt/ServicesSection";
import SharedFooter from "@/app/components/shared/SharedFooter";
import DiferenciaisSection from "@/app/components/rt/DiferenciaisSection";
import EstruturaSection from "@/app/components/rt/EstruturaSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { rtConfig } from "@/app/config/rt.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <SharedHomeSection config={rtConfig} />
            <SharedSobreSection config={rtConfig} />
            <DiferenciaisSection/>
            <ServicesSection/>
            <EstruturaSection/>
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>
    );
}
