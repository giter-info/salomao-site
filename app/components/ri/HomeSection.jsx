// HomeSection.tsx
import Image from "next/image";
import logo from "@/app/images/layout/logo-ri.png";
import * as motion from "framer-motion/client";

export default function HomeSection() {
    return (
        <section id="home" className="bg-ri bg-cover bg-no-repeat bg-center min-h-screen flex items-center bg-white">
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
                            className="font-cardo text-4xl xl:text-6xl font-bold text-ri-blue"
                        >
                            Respeitando o normal
                        </motion.h1>
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className="font-cardo text-4xl xl:text-6xl font-bold text-ri-blue mb-4"
                        >
                            de cada um!
                        </motion.h1>
                        <motion.h2

                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.4, ease: "easeOut"}}
                            className="text-lg font-bold text-white mb-4"
                        >
                            Bem-vindo ao Residencial Inclusivo Salomão, criada para oferecer um ambiente seguro,
                            acolhedor e digno a pessoas portadoras PCD, garantindo cuidado contínuo, qualidade de vida e
                            respeito à liberdade e à cidadania.
                        </motion.h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
