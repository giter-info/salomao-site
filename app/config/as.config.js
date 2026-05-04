import brand from "@/app/images/layout/brand.png";
import logoAs from "@/app/images/layout/logo-dog.png";
import asImg1 from "@/app/images/as/estrutura/1.jpeg";
import asImg2 from "@/app/images/as/estrutura/2.jpeg";
import asImg3 from "@/app/images/as/estrutura/3.jpeg";
import asImg4 from "@/app/images/as/estrutura/4.jpeg";
import asImg5 from "@/app/images/as/estrutura/5.jpeg";
import asImg6 from "@/app/images/as/estrutura/6.jpeg";
import asImg7 from "@/app/images/as/estrutura/7.jpeg";
import asImg8 from "@/app/images/as/estrutura/8.jpeg";
import asImg9 from "@/app/images/as/estrutura/9.jpeg";
import asImg10 from "@/app/images/as/estrutura/10.jpeg";
import asImg11 from "@/app/images/as/estrutura/11.jpeg";
import asImg12 from "@/app/images/as/estrutura/12.jpeg";

export const asConfig = {
    basePath: "/adestramento-salomao",
    theme: {
        primaryBg: "bg-rt-dark",
        secondaryBg: "bg-rt-dark",
        mobileMenuBg: "bg-as-gray",
        textPrimary: "text-rt-white",
        textAccent: "text-rt-white",
        shadowAccent: "hover:shadow-rt-dark",
        navbarBg: "bg-rt-dark",
        homeBg: "bg-asback",
        homeBgImage: "/bg-as.png",
        sobreBg: "bg-as-gray",
        sobreText: "text-rt-white"
    },
    navbar: {
        logo: brand,
        links: [
            { nome: "Início", link: "/" },
            { nome: "Estrutura", link: "/adestramento-salomao/estrutura" },
            { nome: "Contato", link: "/adestramento-salomao/#contato" }
        ]
    },
    unidades: [
        {
            id: "padrao",
            nome: "Centro de Treinamento",
            descricao: "Nossa estrutura completa para o adestramento e cuidado do seu pet.",
            imagem: asImg1,
            imagens: [
                { src: asImg1, alt: "Adestramento 1" },
                { src: asImg2, alt: "Adestramento 2" },
                { src: asImg3, alt: "Adestramento 3" },
                { src: asImg4, alt: "Adestramento 4" },
                { src: asImg5, alt: "Adestramento 5" },
                { src: asImg6, alt: "Adestramento 6" },
                { src: asImg7, alt: "Adestramento 7" },
                { src: asImg8, alt: "Adestramento 8" },
                { src: asImg9, alt: "Adestramento 9" },
                { src: asImg10, alt: "Adestramento 10" },
                { src: asImg11, alt: "Adestramento 11" },
                { src: asImg12, alt: "Adestramento 12" },
            ]
        }
    ],
    home: {
        logo: logoAs,
        titleLine1: "Adestramento",
        titleLine2: "Salomão",
        subtitle: "Qualidade de vida para Você e seu PET, para sua Família e para a Sociedade.",
        fontFamily: "font-cardo"
    },
    socials: {
        instagram: "https://www.instagram.com/adestramentosalomao",
        facebook: "https://www.facebook.com/adestramentosalomao/",
        whatsapp: "5547988688790",
        whatsappMessage: "Entrei em contato pelo novo site. Quero informações sobre adestramento.",
        email: "je4n.pw@gmai.com",
        address: [
            "Rua Pedro Pedro Zimmermann, n. 2391",
            "CEP 89068-001",
            "Itoupavazinha - Blumenau - Santa Catarina"
        ]
    },
    footer: {
        links: [
            { nome: "Início", link: "/" },
            { nome: "Sobre Nós", link: "/residencia-inclusiva/#sobre" },
            { nome: "Imagens", link: "/residencia-inclusiva/estrutura" },
            { nome: "Contato", link: "/residencia-inclusiva/#contato" }
        ],
        additionalLinks: [
            { nome: "Residencial Terapêutico", link: "/residencial-terapeutico" },
            { nome: "Residência Inclusiva", link: "/residencia-inclusiva" }
        ]
    }
};
