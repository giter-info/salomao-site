// SobreSection.jsx
import * as motion from "framer-motion/client";
import Image from "next/image";
import service1 from "@/app/images/diferencial1.svg";
import service2 from "@/app/images/diferencial2.svg";
import service3 from "@/app/images/diferencial3.svg";

export default function SobreSection() {
    return (
        <section id="sobre" className="py-5 bg-rt-green pb-12">
            <div className="container mx-auto px-4 pt-32">
                <motion.h2
                    className="text-4xl font-bold text-rt-primary text-center mb-8"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Sobre Nós
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Image className="p-10" src={service1} alt="Residência Terapêutica"/>
                        <p className="text-rt-green text-lg">
                            O Residencial foi pensado a partir da necessidade que vimos em ter um serviço em nosso
                            território a fim de complementar a Rede de Atenção Psicossocial.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <Image className="p-10" src={service2} alt="Atendimento Individualizado"/>
                        <p className="text-rt-green text-lg">
                            Esse trabalho visa fazer parte da luta antimanicomial que busca restabelecer os valores
                            morais, éticos, comportamentais e espirituais, direcionando-os a reabilitação social e
                            cultural.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                    >
                        <Image className="p-10" src={service3} alt="Acompanhamento"/>
                        <p className="text-rt-green text-lg">
                            Visa ainda promover dignidade, direito à cidadania, à liberdade e a autonomia desses
                            sujeitos. O acompanhamento diário com equipe especializada aliado a farmacoterapia são um
                            importante diferencial para o avanço no quadro da doença.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
