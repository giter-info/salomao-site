import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import MaterialPageComponent from "@/app/components/rt/materiais/PageComponent";
import { asConfig } from "@/app/config/as.config";

export default function Home() {
    return (
        <>
            <SharedNavbar config={asConfig} />
            <MaterialPageComponent />
            <WhatsAppButton/>
            <SharedFooter config={asConfig} />
        </>
    );
}
