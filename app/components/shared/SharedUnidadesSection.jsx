"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";

export default function SharedUnidadesSection({ config }) {
    const { unidades, theme, home, basePath } = config;

    if (!unidades || unidades.length === 0) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const scrollToUnidades = () => {
        const gridSection = document.getElementById('unidades-grid');
        if (gridSection) {
            gridSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Hero Unidades */}
            <section className={`relative min-h-[60vh] flex items-center ${theme.primaryBg} overflow-hidden pt-20`}>
                <div className="container mx-auto px-4 z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <Image
                                src={home.logo}
                                alt="Logo"
                                className="w-40 md:w-56 h-auto mx-auto"
                                priority
                            />
                        </motion.div>
                        
                        <motion.h2
                            variants={itemVariants}
                            className={`text-4xl md:text-6xl font-bold ${theme.textAccent} mb-10 drop-shadow-sm`}
                        >
                            Nossas Unidades
                        </motion.h2>

                        <motion.button
                            variants={itemVariants}
                            onClick={scrollToUnidades}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${theme.textAccent === 'text-rt-primary' ? 'bg-rt-primary/10 border-rt-primary/30 text-rt-primary' : 'bg-white/10 border-white/30 text-white'} backdrop-blur-sm border px-8 py-4 rounded-full font-bold transition-all hover:bg-opacity-20 inline-flex items-center gap-2`}
                        >
                            Ver unidades <FaChevronDown className="text-sm" />
                        </motion.button>
                    </motion.div>
                </div>
                
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>
            </section>

            {/* Grid Unidades */}
            <section id="unidades-grid" className="py-24 bg-slate-50 scroll-mt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-12">
                        {unidades.map((unidade, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
                            >
                                <div className="h-64 relative">
                                    <Image
                                        src={unidade.imagem}
                                        alt={unidade.nome}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-8">
                                    <h4 className="text-2xl font-bold text-slate-800 mb-4">{unidade.nome}</h4>
                                    <p className="text-slate-600 leading-relaxed mb-6">{unidade.descricao}</p>
                                    
                                    <Link 
                                        href={`${basePath}/estrutura/${unidade.id}`}
                                        className={`inline-flex items-center gap-2 font-bold transition-all duration-300 group ${
                                            theme.textAccent === 'text-rt-primary' ? 'text-rt-primary hover:text-green-700' : 'text-slate-800 hover:text-slate-600'
                                        }`}
                                    >
                                        Conheça a estrutura 
                                        <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
