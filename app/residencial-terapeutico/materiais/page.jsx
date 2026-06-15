import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedFooter from "@/app/components/shared/SharedFooter";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import MateriaisPageComponent from "@/app/components/rt/materiais/PageComponent";
import { rtConfig } from "@/app/config/rt.config";

export const metadata = {
    title: "Materiais Úteis",
    description: "Acesse documentos e cartilhas sobre o funcionamento das residências terapêuticas, desospitalização e reintegração social na Rede Salomão.",
    keywords: [
        "Materiais Úteis",
        "Cartilhas Saúde Mental",
        "Desospitalização",
        "Reintegração Social",
        "Rede Salomão"
    ],
};

export default function SaibaMaisPage() {
    return (
        <>
            <SharedNavbar config={rtConfig} />
            <MateriaisPageComponent/>
            <WhatsAppButton/>
            <SharedFooter config={rtConfig} />
        </>

    );
}
