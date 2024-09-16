import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const commonTitle = "Residencial Terapêutico Salomão";
const commonDescription =
    "Residência para portadores de transtornos mentais, egressos de internações psiquiátricas e hospitais de custódia.";
const commonUrl = "https://redesalomao.com.br/";
const commonImage = "https://redesalomao.com.br/capa.jpg";
const commonImageDetails = {
    url: commonImage,
    width: 1200,
    height: 630,
    alt: "Imagem de prévia do site.",
};

export const metadata = {
    title: commonTitle,
    description: commonDescription,
    openGraph: {
        type: "website",
        title: commonTitle,
        description: commonDescription,
        url: commonUrl, // Pode não ser necessário para OpenGraph
        images: [commonImageDetails],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: commonTitle,
        description: commonDescription,
        images: [commonImage], // Corrigido para plural
        image_alt: "Imagem de prévia do site no Twitter", // Adicionado alt
    },
    author: "Je4nPw",
    keywords: [
        "Residencial Terapêutico",
        "Transtornos Mentais",
        "Residencial",
        "desospitalização",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt">
        <body className={inter.className}>
        <div className="bg-rt-green">{children}</div>
        </body>
        </html>
    );
}
