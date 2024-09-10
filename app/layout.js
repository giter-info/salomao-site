import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Residencial Terapêutico Salomão",
    description: "Residência para portadores de transtornos mentais, egressos de internações psiquiátricas de longa" +
        " permanência e hospitais de custódia.",
    openGraph: {
        url: "https://redesalomao.com.br/",
        type: "website",
        title: "Residencial Terapêutico Salomão",
        description: "Residência para portadores de transtornos mentais, egressos de internações psiquiátricas de" +
            " longa permanência e hospitais de custódia.",
        images: [
            {
                url: "https://redesalomao.com.br/capa.jpg",
                width: 1200,
                height: 620,
                alt: "Imagem de prévia",
            },
        ],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        url: "https://redesalomao.com.br/",
        title: "Residencial Terapêutico Salomão",
        description: "Residência para portadores de transtornos mentais, egressos de internações psiquiátricas de" +
            " longa permanência e hospitais de custódia.",
        image: "https://redesalomao.com.br/capa.jpg",
    },
    whatsapp: {
        title: "Residencial Terapêutico Salomão",
        description: "Residência para portadores de transtornos mentais, egressos de internações psiquiátricas de" +
            " longa permanência e hospitais de custódia.",
        image: "https://redesalomao.com.br/capa.jpg",
    }
};

export default function RootLayout({children}) {
    return (<html lang="en">
    <body className={inter.className}>{children}</body>
    </html>);
}
