import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import EstruturaPageComponent from "@/app/components/as/estrutura/PageComponent";
import { asConfig } from "@/app/config/as.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={asConfig} />
            <EstruturaPageComponent />
            <WhatsAppButton/>
            <SharedFooter config={asConfig} />
        </>
    );
}
