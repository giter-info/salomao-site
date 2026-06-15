import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import SaibaMaisPageComponent from "@/app/components/saibamais/PageComponent";
import Navbar from "@/app/components/root/Navbar";
import Footer from "@/app/components/root/Footer";

export const metadata = {
    title: "Saiba Mais",
    description: "Informações completas sobre como os transtornos mentais podem ser acompanhados, organizados e reabilitados com suporte profissional.",
    keywords: [
        "Saúde Mental",
        "Transtornos Mentais",
        "Reabilitação Psicossocial",
        "Desospitalização",
        "Apoio Psicológico",
        "Rede Salomão"
    ],
};

export default function SaibaMaisPage() {
    return (
        <>
            <Navbar/>
            <SaibaMaisPageComponent/>
            <WhatsAppButton/>
            <Footer/>
        </>

    );
}