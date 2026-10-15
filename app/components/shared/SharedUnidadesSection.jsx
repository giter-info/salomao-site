"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import {FaChevronDown, FaArrowRight} from "react-icons/fa";
import GoldMesh from "@/app/components/layout/GoldMesh";

export default function SharedUnidadesSection({config}) {
    const {unidades, theme, home, basePath} = config;

    if (!unidades || unidades.length === 0) return null;

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {staggerChildren: 0.25, delayChildren: 0.15}},
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
    };

    const scrollToUnidades = () => {
        document.getElementById("unidades-grid")?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <>
            {/* Hero Unidades */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-brand-green pt-24 pb-16">
                {theme.homeBgImage && (
                    <motion.div
                        initial={{scale: 1.1, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 1.5, ease: "easeOut"}}
                        className="absolute inset-0 -z-10"
                    >
                        <Image src={theme.homeBgImage} alt="Background" fill priority className="object-cover opacity-25"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/95 via-brand-green/90 to-brand-green-dark/95"/>
                    </motion.div>
                )}
                <GoldMesh />
                <div className="container mx-auto px-4 z-10">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
                        <motion.div variants={itemVariants} className="mb-8">
                            <Image src={home.logo} alt="Logo" className="w-32 md:w-44 h-auto mx-auto" priority/>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl text-white mb-10">
                            Nossas Unidades
                        </motion.h1>
                        <motion.button
                            variants={itemVariants}
                            onClick={scrollToUnidades}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="bg-brand-gold/10 border border-brand-gold/40 text-brand-gold backdrop-blur-sm px-8 py-4 rounded-full font-bold transition-all hover:bg-brand-gold/20 inline-flex items-center gap-2"
                        >
                            Ver unidades <FaChevronDown className="text-sm"/>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Grid Unidades */}
            <section id="unidades-grid" className="py-24 bg-brand-offwhite dark:bg-brand-green-dark scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8">
                        {unidades.map((unidade, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-50px"}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                whileHover={{y: -10}}
                                className="surface-card overflow-hidden w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                            >
                                <Link href={`${basePath}/estrutura/${unidade.id}`}>
                                    <div className="h-64 relative">
                                        <Image
                                            src={unidade.imagem}
                                            alt={unidade.nome}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="font-serif text-2xl text-brand-green dark:text-brand-offwhite mb-4">{unidade.nome}</h3>
                                        <p className="text-brand-ink/70 dark:text-brand-offwhite/75 leading-relaxed mb-6">{unidade.descricao}</p>
                                        <div className="inline-flex items-center gap-2 font-bold text-brand-green dark:text-brand-gold transition-all duration-300 group">
                                            Conheça a estrutura
                                            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-2"/>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
