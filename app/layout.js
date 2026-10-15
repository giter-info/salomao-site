import {Inter, Nunito_Sans, Montserrat, Delius, Playfair_Display} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import GTagComponent from "@/app/components/layout/GTagComponent";
import JsonLd from "@/app/components/layout/JsonLd";
import {organizationSchema} from "@/app/config/seo.config";

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

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: 'swap',
});

const commonTitle = "Rede Salomão | Cuidado, Inclusão e Acolhimento";
const commonDescription =
    "A Rede Salomão oferece Residencial Terapêutico, Residência Inclusiva e Marketing Salomão em Blumenau e Chapecó, com acolhimento de excelência, dignidade e soluções B2B.";
const commonUrl = "https://redesalomao.com.br/";
const commonImage = "/capa-2.jpeg";
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
        "Marketing Salomão",
        "Marketing Corporativo",
        "Marketing B2B",
        "Saúde Mental",
        "Transtornos Mentais",
        "Acolhimento de deficientes",
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
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${inter.variable} ${nunito.variable} ${montserrat.variable} ${delius.variable} ${playfair.variable} ${inter.className}`}>
                <a
                    href="#conteudo"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-gold focus:text-brand-green focus:px-4 focus:py-2 focus:rounded-full focus:font-bold"
                >
                    Pular para o conteúdo
                </a>
                <Script id="theme-init" strategy="beforeInteractive">
                    {`(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`}
                </Script>
                <GTagComponent />
                <JsonLd data={organizationSchema} />
                {children}
            </body>
        </html>
    );
}
