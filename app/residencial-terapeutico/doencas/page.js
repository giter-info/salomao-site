import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import DoencasPageComponent from "@/app/components/rt/doencas/PageComponent";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { rtConfig } from "@/app/config/rt.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <DoencasPageComponent />
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>
    );
}
