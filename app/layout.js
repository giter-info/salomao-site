import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});
const commonTitle = "Residencial Terapêutico Salomão";
const commonDescription = "Residência para portadores de transtornos mentais, egressos de internações psiquiátricas de longa permanência e hospitais de custódia.";
const commonUrl = "https://redesalomao.com.br/";
const commonImage = "https://redesalomao.com.br/capa.jpg";
const commonImageDetails = {
    url: commonImage,
    width: 600 ,
    height: 600,
    alt: "Imagem de prévia do site.",
};

export const metadata = {
    title: commonTitle,
    description: commonDescription,
    url: commonUrl,
    openGraph: {
        type: "website",
        title: commonTitle,
        description: commonDescription,
        url: commonUrl,
        images: [commonImageDetails],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: commonTitle,
        description: commonDescription,
        url: commonUrl,
        image: commonImage,
    },
    whatsapp: {
        title: commonTitle,
        description: commonDescription,
        image: commonImage,
    },
    author: "Je4nPw",
    keywords: ["Residencial Terapêutico", "Transtornos Mentais", "Residencial", "desospitalização"],
};

export default function RootLayout({children}) {
    return (<html lang="en">
    <body className={inter.className}>{children}</body>
    </html>);
}
