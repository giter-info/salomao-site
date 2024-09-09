// HomeSection.tsx
import Image from "next/image";
import logo from "@/app/images/logo.png";
import {WhatsAppIcon} from "@/app/components/SVGs";
import * as motion from "framer-motion/client";

export default function HomeSection() {
    return (
        <section id="home" className="bg-hero bg-cover bg-no-repeat bg-center min-h-screen flex items-center bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl py-32 sm:py-48">
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
                                    className="w-60 h-auto mx-auto"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="text-center">
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className="text-4xl md:text-6xl font-bold text-rt-green mb-4"
                        >
                            Um lugar de paz
                        </motion.h1>
                        <motion.h2
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.4, ease: "easeOut"}}
                            className="text-2xl md:text-2xl font-bold text-rt-green mb-4"
                        >
                            para ter seu tempo...
                        </motion.h2>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.6, ease: "easeOut"}}
                            className="py-6 text-lg md:text-2xl leading-8 text-rt-dark md:text-center text-left"
                        >
                            Bem-vindo ao Residencial Terapêutico Salomão, um ambiente seguro e acolhedor, criado para
                            oferecer suporte integral aos moradores.
                        </motion.p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <motion.a
                                href="https://api.whatsapp.com/send?phone=5547999604301&text=Entrei%20em%20contato%20pelo%20novo%20site.%20"
                                target="_blank"
                                className="flex gap-2 items-center justify-center bg-rt-green mb-12 text-rt-info px-4 py-2 rounded-full font-semibold hover:bg-rt-dark transition text-sm md:text-base"
                                rel="noopener noreferrer"
                                initial={{opacity: 0, scale: 0.9}}
                                whileHover={{scale: 1.05}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.3, ease: "easeOut"}}
                            >
                                <WhatsAppIcon/>
                                Entre em Contato
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
