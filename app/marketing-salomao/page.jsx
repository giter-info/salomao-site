import Navbar from "@/app/components/root/Navbar";
import Footer from "@/app/components/root/Footer";
import WhatsAppButton from "@/app/components/layout/WhatsAppButton";
import MarketingClient from "./MarketingClient";

export const metadata = {
    title: "Marketing Salomão",
    description:
        "Marketing corporativo B2B focado em resultados, autoridade e expansão de mercado. Soluções personalizadas para empresas em Blumenau, Chapecó e Santa Catarina.",
    keywords: [
        "Marketing Salomão",
        "Marketing Corporativo",
        "Marketing B2B",
        "Agência de Marketing",
        "Blumenau",
        "Chapecó",
        "Santa Catarina",
    ],
};

export default function MarketingSalomaoPage() {
    return (
        <>
            <Navbar/>
            <MarketingClient/>
            <WhatsAppButton/>
            <Footer/>
        </>
    );
}
