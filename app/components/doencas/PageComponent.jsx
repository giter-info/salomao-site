"use client";
import * as motion from "framer-motion/client";
import CardsGrid from "@/app/components/doencas/CardsGrid";
import Image from "next/image";
import logo from "@/app/images/layout/logo-rt.png";

export default function DoencasPageComponent() {
    return (
        <section id="atendidas" className="py-24 bg-rt-green scroll-mt-20 mb-14">
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
                    className="text-4xl font-bold text-rt-info text-center mb-8 mt-16"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Doenças Atendidas
                </motion.h2>
                <motion.p
                    className="p-2 rounded-lg text-rt-white text-md max-w-2xl mx-auto mb-12 text-center"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    Os TRANSTORNOS PSICÓTICOS, principal enfoque do Residencial Salomão, caracterizam-se como distorções
                    do pensamento e da percepção e por afetos inapropriados ou embotados.
                    Usualmente mantém-se clara a consciência e a capacidade intelectual, embora certos déficits
                    cognitivos possam evoluir no curso do tempo. Os principais sintomas incluem o eco do pensamento, a
                    imposição ou o roubo do pensamento, a divagação do pensamento, a percepção delirante, ideias
                    delirantes de controle, de influência ou de passividade, vozes alucinatórias que comentam ou
                    discutem com o paciente na terceira pessoa.
                </motion.p>
            </div>
            <div className="container mx-auto px-4">
                <CardsGrid/>
            </div>
        </section>
    );
}