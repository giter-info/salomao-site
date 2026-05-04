import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedHomeSection from "@/app/components/shared/SharedHomeSection";
import SharedSobreSection from "@/app/components/shared/SharedSobreSection";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { riConfig } from "@/app/config/ri.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={riConfig} />
            <SharedHomeSection config={riConfig} />
            <SharedSobreSection config={riConfig} />
            <WhatsAppButton/>
            <SharedFooter config={riConfig} />
        </>
    );
}
