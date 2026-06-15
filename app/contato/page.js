import RootNavbar from "@/app/components/root/Navbar";
import Footer from "@/app/components/root/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import ContatoClient from "./ContatoClient";

export const metadata = {
    title: "Contato",
    description: "Fale com a Rede Salomão. Entre em contato conosco para saber mais sobre nossos serviços de Residencial Terapêutico, Residência Inclusiva e Adestramento de Cães.",
    keywords: ["Contato", "Rede Salomão", "Fale conosco", "WhatsApp", "Blumenau", "Chapecó", "Residencial Terapêutico", "Residência Inclusiva", "Adestramento"],
};

export default function Page() {
    return (
        <>
            <RootNavbar/>
            <ContatoClient />
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}
