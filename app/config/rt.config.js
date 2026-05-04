import brand from "@/app/images/layout/brand.png";
import logoRt from "@/app/images/layout/logo-rt.png";
import service1 from "@/app/images/home/diferencial1.svg";
import service2 from "@/app/images/home/diferencial2.svg";
import service3 from "@/app/images/home/diferencial3.svg";
import unidadeBlumenau from "@/app/images/rt/estrutura/1.jpeg";
import unidadeChapeco from "@/app/images/rt/estrutura/2.jpeg";
import rtImg1 from "@/app/images/rt/estrutura/1.jpeg";
import rtImg2 from "@/app/images/rt/estrutura/2.jpeg";
import rtImg3 from "@/app/images/rt/estrutura/3.jpeg";
import rtImg4 from "@/app/images/rt/estrutura/4.jpeg";
import rtImg5 from "@/app/images/rt/estrutura/5.jpeg";
import rtImg6 from "@/app/images/rt/estrutura/6.jpeg";
import rtImg7 from "@/app/images/rt/estrutura/7.jpeg";
import rtImg8 from "@/app/images/rt/estrutura/8.jpeg";
import rtImg9 from "@/app/images/rt/estrutura/9.jpeg";
import rtImg10 from "@/app/images/rt/estrutura/10.jpeg";
import rtImg11 from "@/app/images/rt/estrutura/11.jpeg";
import rtImg12 from "@/app/images/rt/estrutura/12.jpeg";
import rtImg13 from "@/app/images/rt/estrutura/13.jpeg";
import rtImg14 from "@/app/images/rt/estrutura/14.jpeg";
import rtImg15 from "@/app/images/rt/estrutura/15.jpeg";
import rtImg16 from "@/app/images/rt/estrutura/16.jpeg";
import rtImg17 from "@/app/images/rt/estrutura/17.jpeg";
import rtImg18 from "@/app/images/rt/estrutura/18.jpeg";

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
            { nome: "Unidades", link: "/residencial-terapeutico/unidades" },
            { nome: "Doenças Atendidas", link: "/residencial-terapeutico/doencas" },
            { nome: "Estrutura", link: "/residencial-terapeutico/estrutura" },
            { nome: "Dúvidas Frequentes", link: "/residencial-terapeutico/faq" },
            { nome: "Contato", link: "/#contato" }
        ]
    },
    unidades: [
        {
            id: "blumenau",
            nome: "Unidade Blumenau",
            descricao: "Nova unidade em Blumenau, oferecendo suporte especializado em um ambiente acolhedor e seguro.",
            imagem: unidadeBlumenau,
            imagens: [
                { src: rtImg1, alt: "Estrutura Blumenau 1" },
                { src: rtImg2, alt: "Estrutura Blumenau 2" },
                { src: rtImg3, alt: "Estrutura Blumenau 3" },
                { src: rtImg4, alt: "Estrutura Blumenau 4" },
                { src: rtImg5, alt: "Estrutura Blumenau 5" },
                { src: rtImg6, alt: "Estrutura Blumenau 6" },
                { src: rtImg7, alt: "Estrutura Blumenau 7" },
                { src: rtImg8, alt: "Estrutura Blumenau 8" },
                { src: rtImg9, alt: "Estrutura Blumenau 9" },
            ]
        },
        {
            id: "chapeco",
            nome: "Unidade Chapecó",
            descricao: "Nova unidade em Chapecó, expandindo nossa rede de cuidado para o grande oeste catarinense.",
            imagem: unidadeChapeco,
            imagens: [
                { src: rtImg10, alt: "Estrutura Chapecó 1" },
                { src: rtImg11, alt: "Estrutura Chapecó 2" },
                { src: rtImg12, alt: "Estrutura Chapecó 3" },
                { src: rtImg13, alt: "Estrutura Chapecó 4" },
                { src: rtImg14, alt: "Estrutura Chapecó 5" },
                { src: rtImg15, alt: "Estrutura Chapecó 6" },
                { src: rtImg16, alt: "Estrutura Chapecó 7" },
                { src: rtImg17, alt: "Estrutura Chapecó 8" },
                { src: rtImg18, alt: "Estrutura Chapecó 9" },
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
