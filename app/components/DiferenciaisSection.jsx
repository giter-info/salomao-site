import * as motion from "framer-motion/client";
import Image from "next/image";
import about2 from "@/app/images/about2.jpg";

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
                        Nossos Diferenciais
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
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <motion.div
                                    className="w-full h-auto rounded-lg"
                                    initial={{opacity: 0, scale: 0.95}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                >
                                    <Image src={about2} alt="about 1 " className="rounded-lg"/>
                                </motion.div>
                            </div>
                            <div className="md:w-2/3 md:pl-6 text-rt-white">
                                <h3 className="text-md lg:text-xl   font-bold mb-4">O programa de atividades, coordenado pela equipe
                                    terapêutica é construído após criteriosa avaliação
                                    respeitando as necessidades de cada um.</h3>
                                <div className="flex flex-wrap gap-3 mt-6 text-left mx-4">
                                    <ul className="flex flex-col mx-auto list-disc text-rt-white text-lg">
                                        <li>Acolhimento humanizado</li>
                                        <li>Serviços de Psicologia aos familiares</li>
                                        <li>Acompanhamento psicológico</li>
                                        <li>Arteterapia</li>
                                    </ul>
                                    <ul className="flex flex-col mx-auto list-disc text-rt-white text-lg">
                                        <li>Musicoterapia</li>
                                        <li>Atualização da rotina da casa com fotos e vídeos em grupo do Whatsapp
                                        </li>
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