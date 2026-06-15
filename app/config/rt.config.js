import brand from "@/app/images/layout/brand.png";
import logoRt from "@/app/images/layout/logo-rt.png";
import service1 from "@/app/images/home/diferencial1.svg";
import service2 from "@/app/images/home/diferencial2.svg";
import service3 from "@/app/images/home/diferencial3.svg";
// Bnu
import rt1Capa from "../images/rt/estrutura/rtbnu/1.webp";
import rt1Img2 from "../images/rt/estrutura/rtbnu/2.webp";
import rt1Img3 from "../images/rt/estrutura/rtbnu/3.webp";
import rt1Img4 from "../images/rt/estrutura/rtbnu/4.webp";
import rt1Img5 from "../images/rt/estrutura/rtbnu/5.webp";
import rt1Img6 from "../images/rt/estrutura/rtbnu/6.webp";
import rt1Img7 from "../images/rt/estrutura/rtbnu/7.webp";
import rt1Img8 from "../images/rt/estrutura/rtbnu/8.webp";
import rt1Img9 from "../images/rt/estrutura/rtbnu/9.webp";
import rt1Img10 from "../images/rt/estrutura/rtbnu/10.webp";
import rt1Img11 from "../images/rt/estrutura/rtbnu/11.webp";
import rt1Img12 from "../images/rt/estrutura/rtbnu/12.webp";
// Chape
import rt2Capa from "../images/rt/estrutura/rtchape/rtchapecapa.webp";
import rt2Img1 from "../images/rt/estrutura/rtchape/soon.jpg";

export const rtConfig = {
    basePath: "/residencial-terapeutico",
    theme: {
        primaryBg: "bg-rt-green",
        secondaryBg: "bg-green-950",
        mobileMenuBg: "bg-rt-green",
        textPrimary: "text-rt-white",
        textAccent: "text-rt-primary",
        shadowAccent: "hover:shadow-rt-primary",
        navbarBg: "bg-rt-green",
        homeBg: "bg-rtback",
        homeBgImage: "/bg-rt.png",
        sobreBg: "bg-rt-green",
        sobreText: "text-rt-dark"
    },
    navbar: {
        logo: brand,
        links: [
            { nome: "Início", link: "/" },
            { nome: "Sobre Nós", link: "/residencial-terapeutico/#sobre" },
            { nome: "Apresentação", link: "/apresentacao" },
            { nome: "Unidades", link: "/residencial-terapeutico/unidades" },
            { nome: "Doenças Atendidas", link: "/residencial-terapeutico/doencas" },
            { nome: "Dúvidas Frequentes", link: "/residencial-terapeutico/faq" },
            { nome: "Contato", link: "/contato" }
        ]
    },
    unidades: [
        {
            id: "blumenau",
            nome: "Unidade Blumenau",
            descricao: "Nova unidade em Blumenau, oferecendo suporte especializado em um ambiente acolhedor e seguro.",
            imagem: rt1Capa,
            imagens: [
                { src: rt1Capa, alt: "Estrutura Blumenau 1" },
                { src: rt1Img2, alt: "Estrutura Blumenau 2" },
                { src: rt1Img9, alt: "Estrutura Blumenau 8" },
                { src: rt1Img3, alt: "Estrutura Blumenau 3" },
                { src: rt1Img4, alt: "Estrutura Blumenau 4" },
                { src: rt1Img10, alt: "Estrutura Blumenau 8" },
                { src: rt1Img5, alt: "Estrutura Blumenau 5" },
                { src: rt1Img6, alt: "Estrutura Blumenau 6" },
                { src: rt1Img11, alt: "Estrutura Blumenau 8" },
                { src: rt1Img7, alt: "Estrutura Blumenau 7" },
                { src: rt1Img8, alt: "Estrutura Blumenau 8" },
                { src: rt1Img12, alt: "Estrutura Blumenau 8" },
            ]
        },
        {
            id: "chapeco",
            nome: "Unidade Chapecó",
            descricao: "Nova unidade em Chapecó, expandindo nossa rede de cuidado para o grande oeste catarinense.",
            imagem: rt2Capa,
            imagens: [
                { src: rt2Img1, alt: "Estrutura Chapecó 2" },
                { src: rt2Img1, alt: "Estrutura Chapecó 2" },
                { src: rt2Img1, alt: "Estrutura Chapecó 2" },
                { src: rt2Img1, alt: "Estrutura Chapecó 2" },
            ]
        }
    ],
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
            "Rua Doutor Pedro Zimmermann, n. 2391",
            "CEP 89066-001",
            "Itoupavazinha - Blumenau - Santa Catarina"
        ]
    },
    footer: {
        links: [
            { nome: "Início", link: "/" },
            { nome: "Sobre Nós", link: "/residencial-terapeutico/#sobre" },
            { nome: "Apresentação", link: "/apresentacao" },
            { nome: "Doenças Atendidas", link: "/residencial-terapeutico/doencas" },
            { nome: "Contato", link: "/contato" }
        ],
        additionalLinks: [
            { nome: "Residência Inclusiva", link: "/residencia-inclusiva" },
            { nome: "Adestramento Salomão", link: "/adestramento-salomao" },
            { nome: "Dúvidas Frequentes", link: "/residencial-terapeutico/faq" }
        ]
    }
};
