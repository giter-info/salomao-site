import * as motion from "framer-motion/client";
import Image from "next/image";
import about2 from "@/app/images/home/about2.jpg";

export default function DiferenciaisSection() {
    return (
        <section id="diferenciais" className=" bg-rt-green mt-16 scroll-mt-20">
            <div className="rounded-3xl bg-rt-info py-16 mx-4 lg:mx-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-rt-green text-center mb-8"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Por que adestrar?
                    </motion.h2>
                    <div className="grid gap-8 md:grid-cols-1">
                        {/* Card 1 */}
                        <motion.div
                            className="flex flex-col md:flex-row bg-rt-green p-6 shadow-lg rounded-lg  hover:shadow hover:shadow-rt-green "
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            {/* Imagem */}
                            <div className="md:w-2/5 mb-4 md:mb-0">
                                <motion.div
                                    className="w-full h-auto rounded-lg"
                                    initial={{opacity: 0, scale: 0.95}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                >
                                    <Image src={about2} alt="about 1 " className="rounded-lg"/>
                                </motion.div>
                            </div>
                            <div className="md:w-3/5 md:pl-6 text-rt-white">
                                <h3 className="text-md lg:text-xl font-bold mb-4">
                                    Alguns benefícios do adestramento
                                </h3>
                                <div className="flex flex-wrap gap-3 mt-6 text-left mx-4">
                                    <ul className="flex flex-col list-disc text-rt-white text-lg">
                                        <li>Educação e comportamento corrigido</li>
                                        <li>Agressividade e latido controlados</li>
                                        <li>Interações melhoradas, social e animal</li>
                                        <li>Segurança e guarda</li>
                                        <li>Diminuição da ansiedade e stress</li>
                                        <li>Terapia de pessoas com traumas, medos e transtornos</li>
                                        <li>Comportamento em passeios</li>
                                        <li>Xixi-Dog no local certo, sem mais sujeiras incômodas</li>
                                        <li>Anti-envenenamento</li>
                                        <li>Estímulo do raciocínio e memória</li>
                                        <li>Obediência e confiança</li>
                                        <li>Vínculo fortalecido</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}