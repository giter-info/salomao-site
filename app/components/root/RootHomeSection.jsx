// RootHomeSection.tsx
import Image from "next/image";
import logort from "@/app/images/layout/logo-rt.png";
import logori from "@/app/images/layout/logo-ri.png";
import * as motion from "framer-motion/client";

export default function RootHomeSection() {
    return (
        <section id="home" className="bg-hero bg-cover bg-no-repeat bg-center min-h-screen flex items-center bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl py-10 sm:py-12">
                    <div className="sm:mb-8 flex justify-center">
                        <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                            <motion.div
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 1, ease: "easeOut"}}
                            >
                                <Image
                                    src={logort}
                                    alt="Logo"
                                    className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                    priority
                                />
                            </motion.div>
                        </div>
                        <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                            <motion.div
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 1, ease: "easeOut"}}
                            >
                                <Image
                                    src={logori}
                                    alt="Logo"
                                    className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="text-center">
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className="text-2xl xl:text-6xl font-bold text-slate-800"
                        >
                            Respeitando o normal
                        </motion.h1>
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className="text24xl xl:text-6xl font-bold text-slate-800 mb-4"
                        >
                            de cada um!
                        </motion.h1>
                        <motion.h2

                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.4, ease: "easeOut"}}
                            className="text-lg font-bold text-slate-800 mb-4"
                        >
                            Bem-vindo à Rede Salomão, criada para oferecer serviços acolhedores inclusivos e qualificados.
                        </motion.h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
