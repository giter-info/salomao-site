import RootNavbar from "@/app/components/root/Navbar";
import Footer from "@/app/components/root/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import ApresentacaoClient from "./ApresentacaoClient";

export const metadata = {
    title: "Apresentação do Residencial Terapêutico",
    description: "Conheça a proposta técnica do Residencial Terapêutico Salomão. Entenda os nossos eixos de cuidado e o plano de reabilitação de 12 meses.",
    keywords: [
        "Apresentação Residencial Terapêutico",
        "Eixos de Cuidado",
        "Plano de Reabilitação",
        "Saúde Mental",
        "Rede Salomão",
        "Desospitalização"
    ],
};

export default function Page() {
    return (
        <>
            <RootNavbar/>
            <ApresentacaoClient />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}
