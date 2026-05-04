import {Inter, Nunito_Sans, Montserrat, Delius} from "next/font/google";
import "./globals.css";
import GTagComponent from "@/app/components/layout/GTagComponent";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: 'swap',
});

const nunito = Nunito_Sans({
    subsets: ["latin"],
    variable: "--font-nunito",
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: 'swap',
});

const delius = Delius({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-delius",
    display: 'swap',
});

const commonTitle = "Residencial Terapêutico Salomão";
const commonDescription =
    "Respeitando o normal de cada um.";
const commonUrl = "https://redesalomao.com.br/";
const commonImage = "https://redesalomao.com.br/capa-2.jpg";
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
        "antimanicomial",
        "raps",
        "rede de atenção psicossocial"
    ],
};

export default function RootLayout({children}) {
    return (
        <html lang="pt">
            <body className={`${inter.variable} ${nunito.variable} ${montserrat.variable} ${delius.variable} ${inter.className}`}>
                <GTagComponent />
                {children}
            </body>
        </html>
    );
}
