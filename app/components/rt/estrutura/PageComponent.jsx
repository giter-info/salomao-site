"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function EstruturaPageComponent({ config, unidade }) {
    const { theme, home } = config;

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

    const scrollToGrid = () => {
        const gridSection = document.getElementById('estrutura-grid');
        if (gridSection) {
            gridSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="atendidas" className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 bg-brand-green">
            {theme.homeBgImage && (
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 -z-10"
                >
                    <Image
                        src={theme.homeBgImage}
                        alt="Background"
                        fill
                        priority
                        className="object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/95 via-brand-green/90 to-brand-green-dark/95" />
                </motion.div>
            )}
            <div className="container mx-auto px-4 z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="relative group inline-block">
                            <Image
                                src={home.logo}
                                alt="Logo"
                                className="w-40 md:w-56 h-auto mx-auto"
                                priority
                            />
                        </div>
                    </motion.div>
                    
                    <motion.h2
                        variants={itemVariants}
                        className={`font-serif text-4xl md:text-6xl font-bold text-white mb-10 drop-shadow-sm`}
                    >
                        Imagens da {unidade?.nome || "Estrutura"}
                    </motion.h2>

                    <motion.button
                        variants={itemVariants}
                        onClick={scrollToGrid}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 ${theme.textAccent === 'text-rt-primary' ? 'bg-brand-gold/10 border border-brand-gold/40 text-brand-gold' : 'bg-white/10 border-white/30 text-white'} backdrop-blur-sm px-8 py-4 rounded-full font-bold transition-all hover:bg-brand-gold/20`}
                    >
                        Ver galeria <FaChevronDown className="text-sm" />
                    </motion.button>
                </motion.div>
            </div>
            
            <div className="absolute inset-0 opacity-10 -z-10">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/20`}></div>
            </div>
        </section>
    );
}

export function EstruturaContent({ children }) {
    return (
        <div id="estrutura-grid" className="bg-brand-offwhite dark:bg-brand-green-dark py-24 scroll-mt-20">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </div>
    );
}
