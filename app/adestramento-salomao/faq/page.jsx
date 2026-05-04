import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import FaqPageComponent from "@/app/components/rt/faq/PageComponent";
import { asConfig } from "@/app/config/as.config";

export default function SaibaMaisPage() {
    return (
        <>
            <SharedNavbar config={asConfig} />
            <FaqPageComponent/>
            <WhatsAppButton/>
            <SharedFooter config={asConfig} />
        </>

    );
}
