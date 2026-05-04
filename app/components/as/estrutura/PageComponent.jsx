"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import EstruturaGridComponent from "@/app/components/as/estrutura/EstruturaGridComponent";
import { asConfig } from "@/app/config/as.config";

export default function EstruturaPageComponent() {
    const { home, theme } = asConfig;
    return (
        <section id="estrutura" className="py-24 bg-asback bg-fixed scroll-mt-20 pb-14">
            <div className={`container mx-auto px-4 ${theme.textPrimary}`}>
                <div className="sm:mb-8 flex justify-center">
                    <div className="relative px-3 py-1 text-sm leading-6">
                        <motion.div
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, ease: "easeOut"}}
                        >
                            <Image
                                src={home.logo}
                                alt="Logo"
                                className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
                <motion.h2
                    className={`text-4xl font-bold ${theme.primaryBg.replace('bg-', 'text-')} text-center mb-8 mt-16`}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Imagens do Adestramento Salomão
                </motion.h2>
            </div>
            <div className="container mx-auto px-4">
                <EstruturaGridComponent/>
            </div>
        </section>
    );
}