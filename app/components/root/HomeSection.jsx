import * as motion from "framer-motion/client";
import RedeIconLinks from "@/app/components/layout/RedeIconLinks";

export default function HomeSection() {
    return (
        <section id="home" className="bg-root bg-cover bg-no-repeat bg-center min-h-screen flex items-center bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl py-10 sm:py-12">
                    <RedeIconLinks />
                    <div className="text-center">
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className="text-2xl xl:text-6xl font-bold text-white"
                        >
                            Juntos somos
                        </motion.h1>
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className="text24xl xl:text-6xl font-bold text-white mb-4"
                        >
                            mais fortes!
                        </motion.h1>
                        <motion.h2

                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.4, ease: "easeOut"}}
                            className="text-lg font-bold text-white mb-4"
                        >
                            Bem-vindo à Rede Salomão, criada para oferecer serviços acolhedores inclusivos e qualificados.
                        </motion.h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
