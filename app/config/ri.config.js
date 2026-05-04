import brand from "@/app/images/layout/brand.png";
import logoRi from "@/app/images/layout/logo-ri.png";
import service1 from "@/app/images/home/diferencial1.svg";
import service2 from "@/app/images/home/diferencial2.svg";
import service3 from "@/app/images/home/diferencial3.svg";

export const riConfig = {
    theme: {
        primaryBg: "bg-ri-primary",
        secondaryBg: "bg-ri-primary",
        mobileMenuBg: "bg-ri-blue",
        textPrimary: "text-rt-white",
        textAccent: "text-rt-dark", // No menu mobile do RI, o texto é escuro
        shadowAccent: "hover:shadow-rt-dark",
        homeBg: "bg-riback",
        sobreBg: "bg-ri-greenest",
        sobreText: "text-ri-primary"
    },
    navbar: {
        logo: brand,
        links: [
            { nome: "Início", link: "/" },
            { nome: "Sobre Nós", link: "/residencia-inclusiva/#sobre" },
            { nome: "Estrutura", link: "/residencia-inclusiva/estrutura" },
            { nome: "Contato", link: "/residencia-inclusiva/#contato" }
        ]
    },
    home: {
        logo: logoRi,
        titleLine1: "Acolhimento digno",
        titleLine2: "de Pessoas Portadoras de Deficiência",
        subtitle: "Bem-vindo à Residencia Inclusiva Salomão, um espaço pensado para acolher pessoas com deficiência em um ambiente seguro, humano e respeitoso. Nosso compromisso é com o cuidado contínuo, a promoção da qualidade de vida e a garantia da liberdade, da cidadania e do direito de cada pessoa viver com dignidade.",
        fontFamily: "font-nunito"
    },
    sobre: {
        title: "Sobre Nós",
        cards: [
            {
                image: service1,
                alt: "Residência Inclusiva",
                text: "O Residencial nasceu da percepção de que nosso território precisava de um espaço inclusivo, capaz de acolher pessoas em suas singularidades, fortalecer vínculos e promover autonomia, em diálogo com a rede de cuidados já existente."
            },
            {
                image: service2,
                alt: "Atendimento Individualizado",
                text: "Esse trabalho nasce do compromisso com o cuidado em liberdade e com a construção de um espaço de acolhimento, respeito e pertencimento. Valorizamos princípios éticos, morais, relacionais e espirituais, apoiando cada pessoa em sua trajetória de autonomia, convivência social e participação cultural."
            },
            {
                image: service3,
                alt: "Acompanhamento",
                text: "Nosso cuidado é orientado pela promoção da dignidade, da cidadania, da liberdade e da autonomia. O acompanhamento diário, realizado por uma equipe preparada e atenta às necessidades individuais, aliado aos cuidados em saúde quando indicados, favorece o bem-estar, a estabilidade e a construção de uma vida mais autônoma e integrada à comunidade."
            }
        ]
    },
    socials: {
        instagram: "https://www.instagram.com/inclusiva.salomao/",
        facebook: "https://www.facebook.com/search/top?q=resid%C3%AAncia%20inclusiva",
        whatsapp: "5547988080041",
        whatsappMessage: "Entrei em contato pelo novo site.",
        email: "contato@redesalomao.com.br",
        address: [
            "Rua Guilherme Lueders, nº 285",
            "CEP 89055-470",
            "Tribess - Blumenau - Santa Catarina"
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
            { nome: "Adestramento Salomão", link: "/adestramento-salomao" }
        ]
    }
};
