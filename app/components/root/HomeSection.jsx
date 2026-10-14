"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import {FaArrowRight, FaWhatsapp, FaMapMarkerAlt, FaBrain, FaHandHoldingHeart, FaChartLine} from "react-icons/fa";
import logort from "@/app/images/layout/logo-rt.png";
import logori from "@/app/images/layout/logo-ri.png";
import logomarketing from "@/app/images/layout/logo-marketing.webp";
import {buildWhatsappUrl} from "@/app/config/whatsapp.config";
import GoldMesh from "@/app/components/layout/GoldMesh";

const WHATSAPP_URL = buildWhatsappUrl();

const FRENTES = [
    {
        title: "Residencial Terapêutico",
        desc: "Acolhimento seguro, afetuoso e especializado para pessoas com transtornos mentais egressas de internações psiquiátricas.",
        logo: logort,
        link: "/residencial-terapeutico",
        btn: "Ver Residencial",
        id: "rt",
    },
    {
        title: "Residência Inclusiva",
        desc: "Acolhimento humanizado para pessoas com deficiência, promovendo autonomia, bem-estar e plena cidadania.",
        logo: logori,
        link: "/residencia-inclusiva",
        btn: "Ver Residência",
        id: "ri",
    },
    {
        title: "Marketing Salomão",
        desc: "Potencialize sua empresa com estratégias de marketing corporativo focadas em resultados, autoridade e expansão de mercado.",
        logo: logomarketing,
        link: "/marketing-salomao",
        btn: "Ver Marketing",
        id: "mk",
    },
];

const SOBRE = [
    {icon: FaBrain, titulo: "Saúde Mental", texto: "Residencial Terapêutico com suporte clínico integrado à rotina de lar."},
    {icon: FaHandHoldingHeart, titulo: "Inclusão Social", texto: "Residência Inclusiva para autonomia, bem-estar e plena cidadania."},
    {icon: FaChartLine, titulo: "Soluções em Marketing", texto: "Marketing Salomão: marketing corporativo focado em autoridade e expansão."},
];

const UNIDADES = [
    {nome: "Blumenau", link: "/residencial-terapeutico/unidades"},
    {nome: "Chapecó", link: "/residencial-terapeutico/unidades"},
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.2, delayChildren: 0.1}},
};

const itemVariants = {
    hidden: {opacity: 0, y: 35},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
};

export default function HomeSection() {
    return (
        <>
            {/* Hero — O Grande Portal */}
            <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 bg-brand-green">
                <div className="absolute inset-0 -z-10">
                    <Image src="/bg-root.webp" alt="Rede Salomão" fill priority className="object-cover opacity-25"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/95 via-brand-green/95 to-brand-green-dark/95"/>
                </div>

                <GoldMesh />

                <div className="container mx-auto px-4 z-10 w-full">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-6xl mx-auto flex flex-col items-center"
                    >
                        <div className="text-center mb-14 max-w-3xl">
                            <motion.h1
                                variants={itemVariants}
                                id="portal-main-heading"
                                className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-none mb-5"
                            >
                                Rede Salomão
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-brand-gold text-lg sm:text-2xl font-bold uppercase tracking-[0.2em] mb-4"
                            >
                                Juntos somos mais fortes!
                            </motion.p>
                            <motion.p
                                variants={itemVariants}
                                className="text-brand-offwhite/90 text-lg sm:text-xl font-serif italic"
                            >
                                Respeitando o normal de cada um.
                            </motion.p>
                            <motion.p
                                variants={itemVariants}
                                className="text-brand-offwhite/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-6"
                            >
                                Bem-vindo ao nosso portal. Oferecemos serviços especializados de saúde mental,
                                inclusão social e soluções em marketing, em Blumenau e Chapecó.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mt-9">
                                <a
                                    href="#frentes"
                                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-green font-bold px-7 py-3.5 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-lg"
                                >
                                    Conhecer as frentes <FaArrowRight/>
                                </a>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border-2 border-brand-gold/60 text-brand-gold font-bold px-7 py-3.5 rounded-full hover:bg-brand-gold/10 transition-all duration-300"
                                >
                                    <FaWhatsapp/> WhatsApp
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sobre — Proposta de valor */}
            <section id="sobre-portal" className="bg-brand-offwhite py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">Sobre Nós</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-green mt-3 mb-5">
                            Cuidado humano e crescimento, no mesmo portal
                        </h2>
                        <p className="text-brand-ink/75 text-lg leading-relaxed">
                            Oferecemos serviços especializados de saúde mental, inclusão social e soluções em marketing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SOBRE.map(({icon: Icon, titulo, texto}, idx) => (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-60px"}}
                                transition={{duration: 0.6, delay: idx * 0.1}}
                                className="bg-white dark:bg-brand-green-dark rounded-3xl p-8 border border-slate-200 dark:border-brand-gold/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-green/10 dark:bg-brand-gold/15 text-brand-green dark:text-brand-gold-light flex items-center justify-center mb-5 text-xl">
                                    <Icon/>
                                </div>
                                <h3 className="font-serif text-xl text-brand-green mb-2">{titulo}</h3>
                                <p className="text-brand-ink/70 leading-relaxed text-sm">{texto}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cards de roteamento — 3 frentes */}
            <section id="frentes" className="bg-brand-green py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"/>
                </div>
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Escolha seu caminho</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mt-3">
                            Uma frente para cada necessidade
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {FRENTES.map((frente, idx) => (
                            <motion.div
                                key={frente.id}
                                whileHover={{y: -10, scale: 1.02}}
                                transition={{type: "spring", stiffness: 300, damping: 20}}
                                className="relative group rounded-3xl overflow-hidden border border-brand-gold/25 bg-brand-green-dark/85 backdrop-blur-md shadow-lg hover:shadow-brand-gold/20 hover:border-brand-gold/50 flex flex-col min-h-[400px] transition-all duration-300"
                            >
                                <div className="p-8 flex flex-col flex-grow items-center text-center">
                                    <div className="relative h-28 w-full mb-6 flex items-center justify-center">
                                        <Image
                                            src={frente.logo}
                                            alt={frente.title}
                                            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                            sizes="200px"
                                            priority
                                        />
                                    </div>

                                    <h3 className="font-serif text-2xl text-white mb-3">{frente.title}</h3>
                                    <p className="text-brand-offwhite/75 text-sm leading-relaxed mb-8 flex-grow">{frente.desc}</p>

                                    <Link href={frente.link} className="w-full mt-auto" id={`btn-portal-${idx}`}>
                                        <div className="flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-bold text-sm tracking-wider uppercase bg-brand-gold text-brand-green hover:bg-brand-gold-light transition-all duration-300">
                                            {frente.btn}
                                            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1"/>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nossas Unidades — presença regional */}
            <section id="unidades" className="bg-brand-offwhite py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">Presença Regional</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-green mt-3 mb-4">Nossas Unidades</h2>
                        <p className="text-brand-ink/70">
                            Residências físicas em Blumenau e Chapecó, atendendo toda Santa Catarina.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {UNIDADES.map((unidade, idx) => (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-60px"}}
                                transition={{duration: 0.6, delay: idx * 0.15}}
                                whileHover={{y: -8}}
                                className="bg-white dark:bg-brand-green-dark rounded-3xl border border-slate-200 dark:border-brand-gold/20 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <Link href={unidade.link} className="block p-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                                            <FaMapMarkerAlt/>
                                        </span>
                                        <h3 className="font-serif text-2xl text-brand-green">{unidade.nome}</h3>
                                    </div>
                                    <p className="text-brand-ink/70 text-sm mb-5">
                                        Residencial Terapêutico e Residência Inclusiva — acolhimento com estrutura própria.
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-brand-green font-bold text-sm group">
                                        Conhecer unidades
                                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
