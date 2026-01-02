"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import logo from "@/app/images/layout/logo-rt.png";
import EstruturaGridComponent from "@/app/components/rt/estrutura/EstruturaGridComponent";

export default function EstruturaPageComponent() {
    return (
        <section id="atendidas" className="py-24 bg-teal-200 scroll-mt-20 pb-14">
            <div className="container mx-auto px-4 text-rt-green">
                <div className="sm:mb-8 flex justify-center">
                    <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                        <motion.div
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, ease: "easeOut"}}
                        >
                            <Image
                                src={logo}
                                alt="Logo"
                                className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
                <motion.h2
                    className="text-4xl font-bold text-rt-dark text-center mb-8 mt-16"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Imagens da Residencia Inclusiva Salomão
                </motion.h2>
            </div>
            <div className="container mx-auto px-4">
                <EstruturaGridComponent/>
            </div>
        </section>
    );
}