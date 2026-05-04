import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import DoencasPageComponent from "@/app/components/rt/doencas/PageComponent";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { asConfig } from "@/app/config/as.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={asConfig} />
            <DoencasPageComponent />
            <WhatsAppButton/>
            <SharedFooter config={asConfig} />
        </>
    );
}
