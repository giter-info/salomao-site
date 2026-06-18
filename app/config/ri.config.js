import brand from "@/app/images/layout/brand.png";
import logoRi from "@/app/images/layout/logo-ri.png";
import service1 from "@/app/images/home/diferencial1.svg";
import service2 from "@/app/images/home/diferencial2.svg";
import service3 from "@/app/images/home/diferencial3.svg";
import unidadeBlumenau from "@/app/images/ri/estrutura/unidadeblumenau.webp";
import riImg1 from "@/app/images/ri/estrutura/1.webp";
import riImg2 from "@/app/images/ri/estrutura/2.webp";
import riImg3 from "@/app/images/ri/estrutura/3.webp";
import riImg4 from "@/app/images/ri/estrutura/4.webp";
import riImg5 from "@/app/images/ri/estrutura/5.webp";
import riImg6 from "@/app/images/ri/estrutura/6.webp";
import riImg7 from "@/app/images/ri/estrutura/7.webp";
import riImg8 from "@/app/images/ri/estrutura/8.webp";
import riImg9 from "@/app/images/ri/estrutura/9.webp";
import riImg10 from "@/app/images/ri/estrutura/10.webp";
import riImg11 from "@/app/images/ri/estrutura/11.webp";
import riImg12 from "@/app/images/ri/estrutura/12.webp";
import riImg13 from "@/app/images/ri/estrutura/13.webp";
import riImg14 from "@/app/images/ri/estrutura/14.webp";
import riImg15 from "@/app/images/ri/estrutura/15.webp";
import riImg16 from "@/app/images/ri/estrutura/16.webp";
import riImg17 from "@/app/images/ri/estrutura/17.webp";
import riImg18 from "@/app/images/ri/estrutura/18.webp";
import riImg19 from "@/app/images/ri/estrutura/19.webp";
import riImg20 from "@/app/images/ri/estrutura/20.webp";

export const riConfig = {
    basePath: "/residencia-inclusiva",
    theme: {
        primaryBg: "bg-ri-primary",
        secondaryBg: "bg-ri-primary",
        mobileMenuBg: "bg-ri-primary",
        textPrimary: "text-rt-white",
        textAccent: "text-rt-dark",
        shadowAccent: "hover:shadow-ri-blue/20",
        navbarBg: "bg-ri-primary",
        homeBg: "bg-riback",
        homeBgImage: "/bg-ri.png",
        sobreBg: "bg-ri-primary",
        sobreText: "text-rt-white",
        useGlass: true
    },
    navbar: {
        logo: brand,
        links: [
            { nome: "Início", link: "/" },
            { nome: "Sobre Nós", link: "/residencia-inclusiva/#sobre" },
            { nome: "Apresentação", link: "/apresentacao-ri" },
            { nome: "Unidades", link: "/residencia-inclusiva/unidades" },
            { nome: "Contato", link: "/contato" }
        ]
    },
    unidades: [
        {
            id: "blumenau",
            nome: "Unidade Blumenau",
            descricao: "Nossa unidade em Blumenau especializada no acolhimento de pessoas com deficiência, promovendo autonomia e dignidade.",
            imagem: unidadeBlumenau,
            imagens: [
                {src: riImg1, alt: "Estrutura RI Blumenau 1"},
                {src: riImg4, alt: "Estrutura RI Blumenau 4"},
                {src: riImg3, alt: "Estrutura RI Blumenau 3"},
                {src: riImg5, alt: "Estrutura RI Blumenau 5"},
                {src: riImg6, alt: "Estrutura RI Blumenau 6"},
                {src: riImg8, alt: "Estrutura RI Blumenau 8"},
                {src: riImg2, alt: "Estrutura RI Blumenau 2"},
                {src: riImg9, alt: "Estrutura RI Blumenau 9"},
                {src: riImg7, alt: "Estrutura RI Blumenau 7"},
                {src: riImg10, alt: "Estrutura RI Blumenau 10"},
                {src: riImg11, alt: "Estrutura RI Blumenau 11"},
                {src: riImg12, alt: "Estrutura RI Blumenau 12"},
                {src: riImg13, alt: "Estrutura RI Blumenau 13"},
                {src: riImg14, alt: "Estrutura RI Blumenau 14"},
                {src: riImg15, alt: "Estrutura RI Blumenau 15"},
                {src: riImg16, alt: "Estrutura RI Blumenau 16"},
                {src: riImg17, alt: "Estrutura RI Blumenau 17"},
                {src: riImg18, alt: "Estrutura RI Blumenau 18"},
                {src: riImg19, alt: "Estrutura RI Blumenau 19"},
                {src: riImg20, alt: "Estrutura RI Blumenau 20"}
            ]
        }
    ],
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
            { nome: "Apresentação", link: "/apresentacao-ri" },
            { nome: "Imagens", link: "/residencia-inclusiva/estrutura" },
            { nome: "Contato", link: "/contato" }
        ],
        additionalLinks: [
            { nome: "Residencial Terapêutico", link: "/residencial-terapeutico" },
            { nome: "Adestramento Salomão", link: "/adestramento-salomao" }
        ]
    }
};
