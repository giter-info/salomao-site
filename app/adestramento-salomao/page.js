import SharedNavbar from "@/app/components/shared/SharedNavbar";
import SharedHomeSection from "@/app/components/shared/SharedHomeSection";
import SharedSobreSection from "@/app/components/shared/SharedSobreSection";
import SharedFooter from "@/app/components/shared/SharedFooter";
import DiferenciaisSection from "@/app/components/as/DiferenciaisSection";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import { asConfig } from "@/app/config/as.config";

export const metadata = {
    title: "Adestramento",
    description: "Centro de Treinamento e Adestramento de Cães em Blumenau. Especializados em comportamento canino, obediência e socialização para garantir a harmonia com o seu pet.",
    keywords: [
        "Adestramento de cães Blumenau",
        "Centro de Treinamento Canino",
        "Comportamento de Cães",
        "Escola para cães",
        "Rede Salomão"
    ],
};

export default function Home() {
    return (
        <div>
            <SharedNavbar config={asConfig} />
            <SharedHomeSection config={asConfig} />
            <SharedSobreSection config={asConfig} />
            <DiferenciaisSection />
            <WhatsAppButton/>
            <SharedFooter config={asConfig} />
        </div>
    );
}
