import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import EstruturaPageComponent from "@/app/components/ri/estrutura/PageComponent";
import { riConfig } from "@/app/config/ri.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={riConfig} />
            <EstruturaPageComponent />
            <WhatsAppButton/>
            <SharedFooter config={riConfig} />
        </>
    );
}
