import brand from "@/app/images/layout/brand.png";
import logoAs from "@/app/images/layout/logo-dog.png";

export const asConfig = {
    theme: {
        primaryBg: "bg-as-gray",
        secondaryBg: "bg-as-gray",
        mobileMenuBg: "bg-ri-blue",
        textPrimary: "text-rt-white",
        textAccent: "text-rt-dark",
        shadowAccent: "hover:shadow-rt-dark",
        homeBg: "bg-asback",
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
