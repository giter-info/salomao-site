import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import SharedUnidadesSection from "@/app/components/shared/SharedUnidadesSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { riConfig } from "@/app/config/ri.config";

export default function UnidadesRI() {
    return (
        <main className="min-h-screen">
            <SharedNavbar config={riConfig} />
            <SharedUnidadesSection config={riConfig} />
            <WhatsAppButton />
            <SharedFooter config={riConfig} />
        </main>
    );
}
