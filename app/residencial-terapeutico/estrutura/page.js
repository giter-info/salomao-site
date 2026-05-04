import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import EstruturaPageComponent from "@/app/components/rt/estrutura/PageComponent";
import { rtConfig } from "@/app/config/rt.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <EstruturaPageComponent />
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>
    );
}
