import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import SharedUnidadesSection from "@/app/components/shared/SharedUnidadesSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { rtConfig } from "@/app/config/rt.config";

export default function UnidadesRT() {
    return (
        <main className="min-h-screen">
            <SharedNavbar config={rtConfig} />
            <SharedUnidadesSection config={rtConfig} />
            <WhatsAppButton />
            <SharedFooter config={rtConfig} />
        </main>
    );
}
