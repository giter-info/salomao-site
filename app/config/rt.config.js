import brand from "@/app/images/layout/brand.png";
import logoRt from "@/app/images/layout/logo-rt.png";
import service1 from "@/app/images/home/diferencial1.svg";
import service2 from "@/app/images/home/diferencial2.svg";
import service3 from "@/app/images/home/diferencial3.svg";

export const rtConfig = {
    theme: {
        primaryBg: "bg-rt-green",
        secondaryBg: "bg-green-950",
        mobileMenuBg: "bg-rt-green",
        textPrimary: "text-rt-white",
        textAccent: "text-rt-primary",
        shadowAccent: "hover:shadow-rt-primary",
        homeBg: "bg-rtback",
        homeBgImage: "/bg-rt.png",
        sobreBg: "bg-rt-green",
    },
    navbar: {
        logo: brand,
        links: [
            { nome: "Início", link: "/" },
            { nome: "Sobre Nós", link: "/residencial-terapeutico/#sobre" },
            { nome: "Doenças Atendidas", link: "/residencial-terapeutico/doencas" },
            { nome: "Estrutura", link: "/residencial-terapeutico/estrutura" },
            { nome: "Dúvidas Frequentes", link: "/residencial-terapeutico/faq" },
            { nome: "Contato", link: "/#contato" }
        ]
    },
    home: {
        logo: logoRt,
        titleLine1: "Respeitando o normal",
        titleLine2: "de cada um!",
        subtitle: "Bem-vindo ao Residencial Terapêutico Salomão, criado para oferecer um ambiente seguro e acolhedor à pacientes com transtornos mentais egressos de internações psiquiátricas e hospitais de custódia.",
        fontFamily: "font-script"
    },
    sobre: {
        title: "Sobre Nós",
        cards: [
            {
                image: service1,
                alt: "Residência Terapêutica",
                text: "O Residencial foi pensado a partir da necessidade que vimos em ter um serviço em nosso território a fim de complementar a Rede de Atenção Psicossocial."
            },
            {
                image: service2,
                alt: "Atendimento Individualizado",
                text: "Esse trabalho visa fazer parte da luta antimanicomial que busca restabelecer os valores morais, éticos, comportamentais e espirituais, direcionando-os a reabilitação social e cultural."
            },
            {
                image: service3,
                alt: "Acompanhamento",
                text: "Visa ainda promover dignidade, direito à cidadania, à liberdade e a autonomia desses sujeitos. O acompanhamento diário com equipe especializada aliado a farmacoterapia são um importante diferencial para o avanço no tratamento da doença."
            }
        ]
    },
    socials: {
        instagram: "https://www.instagram.com/residencial.salomao/",
        facebook: "https://www.facebook.com/profile.php?id=61565632582956",
        whatsapp: "5547988080041",
        whatsappMessage: "Entrei em contato pelo novo site.",
        email: "contato@redesalomao.com.br",
        address: [
            "Rua Pedro Léo Menscheim, n. 210",
            "CEP 89117-805",
            "Belchior Alto - Gaspar - Santa Catarina"
        ]
    },
    footer: {
        links: [
            { nome: "Início", link: "/" },
            { nome: "Sobre Nós", link: "/residencial-terapeutico/#sobre" },
            { nome: "Doenças Atendidas", link: "/residencial-terapeutico/doencas" },
            { nome: "Imagens", link: "/residencial-terapeutico/estrutura" },
            { nome: "Contato", link: "/residencial-terapeutico/#contato" }
        ],
        additionalLinks: [
            { nome: "Residência Inclusiva", link: "/residencia-inclusiva" },
            { nome: "Adestramento Salomão", link: "/adestramento-salomao" },
            { nome: "Dúvidas Frequentes", link: "/residencial-terapeutico/faq" }
        ]
    }
};
