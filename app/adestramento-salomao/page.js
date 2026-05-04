import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedHomeSection from "@/app/components/shared/SharedHomeSection";
import SharedSobreSection from "@/app/components/shared/SharedSobreSection";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { asConfig } from "@/app/config/as.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={asConfig} />
            <SharedHomeSection config={asConfig} />
            <SharedSobreSection config={asConfig} />
            <WhatsAppButton/>
            <SharedFooter config={asConfig} />
        </>
    );
}
