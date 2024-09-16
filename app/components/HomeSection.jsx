// HomeSection.tsx
import Image from "next/image";
import logo from "@/app/images/logo.png";
import * as motion from "framer-motion/client";

export default function HomeSection() {
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
                            className="text-2xl md:text-4xl font-bold text-rt-green"
                        >
                            Respeitando o normal
                        </motion.h1>
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className="text-2xl md:text-4xl font-bold text-rt-green mb-4"
                        >
                            de cada um!
                        </motion.h1>
                        <motion.h2

                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.4, ease: "easeOut"}}
                            className="text-lg font-bold text-rt-green mb-4"
                        >
                            Bem-vindo ao Residencial Terapêutico Salomão, criado para oferecer um ambiente seguro e
                            acolhedor à pacientes com transtornos mentais egressos de internações psiquiátricas e
                            hospitais de custódia.
                        </motion.h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
