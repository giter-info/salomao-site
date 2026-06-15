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

const commonTitle = "Rede Salomão | Cuidado, Inclusão e Acolhimento";
const commonDescription =
    "A Rede Salomão oferece Residencial Terapêutico, Residência Inclusiva e Centro de Adestramento em Blumenau e Chapecó, focando no acolhimento de excelência e dignidade.";
const commonUrl = "https://redesalomao.com.br/";
const commonImage = "/capa-2.jpg";
const commonImageDetails = {
    url: commonImage,
    width: 1200,
    height: 630,
    alt: "Rede Salomão - Juntos somos mais fortes",
};

export const metadata = {
    metadataBase: new URL("https://redesalomao.com.br"),
    title: {
        default: commonTitle,
        template: "%s | Rede Salomão"
    },
    description: commonDescription,
    openGraph: {
        type: "website",
        title: commonTitle,
        description: commonDescription,
        url: commonUrl,
        images: [commonImageDetails],
        locale: "pt_BR",
        siteName: "Rede Salomão",
    },
    twitter: {
        card: "summary_large_image",
        title: commonTitle,
        description: commonDescription,
        images: [commonImage],
        image_alt: "Rede Salomão - Juntos somos mais fortes",
    },
    author: "Rede Salomão",
    keywords: [
        "Rede Salomão",
        "Residencial Terapêutico",
        "Residência Inclusiva",
        "Adestramento Salomão",
        "Saúde Mental",
        "Transtornos Mentais",
        "Acolhimento de deficientes",
        "Adestramento de cães Blumenau",
        "desospitalização",
        "antimanicomial",
        "Blumenau",
        "Chapecó",
        "Santa Catarina"
    ],
    robots: {
        index: true,
        follow: true,
    }
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
