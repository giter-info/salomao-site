// SobreSection.jsx
import * as motion from "framer-motion/client";
import {WhatsAppIcon} from "@/app/components/SVGs";
import about1 from "@/app/images/camabox.jpg";
import about2 from "@/app/images/about2.jpg";
import about3 from "@/app/images/about3.jpg";
import Image from "next/image";

export default function SobreSection() {
    return (
        <section id="sobre" className="py-20 bg-rt-info pb-12">
            <div className="container mx-auto px-4 pt-32">
                <motion.h2
                    className="text-4xl font-bold text-rt-dark text-center mb-8"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Sobre Nós
                </motion.h2>
                <motion.p
                    className="text-rt-green text-xl max-w-2xl mx-auto mb-12 md:text-center text-left"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    O serviço Residencial Terapêutico Salomão oferece residência seguindo o modelo assistencial
                    substitutivo da internação psiquiátrica prolongada, acolhendo pessoas com internação de longa
                    permanência, egressas de hospitais psiquiátricos e hospitais de custódia.
                </motion.p>

                <div className="grid gap-8 md:grid-cols-1">
                    {/* Card 1 */}
                    <motion.div
                        className="flex flex-col md:flex-row bg-rt-white p-6 shadow-lg rounded-lg"
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
                                <Image src={about1} alt="about 1 " className="rounded-lg"/>
                            </motion.div>
                        </div>
                        {/* Texto */}
                        <div className="md:w-2/3 md:pl-6 text-rt-green">
                            <h3 className="text-2xl font-bold mb-4">Residência Terapêutica</h3>
                            <p>
                                O Residencial Terapêutico Salomão é uma residência do tipo 1, atendendo pessoas com
                                transtorno mental em processo de desinstitucionalização.
                            </p>
                            <div className="flex flex-col justify-center max-w-64 items-center mx-auto mt-6">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5547999604301&text=Entrei%20em%20contato%20pelo%20novo%20site.%20"
                                    target="_blank"
                                    className="flex gap-2 items-center justify-center bg-rt-green mb-12 text-rt-info px-4 py-2 rounded-full font-semibold hover:bg-rt-dark transition text-sm md:text-base"
                                >
                                    <WhatsAppIcon/>
                                    Entre em Contato
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="flex flex-col md:flex-row bg-rt-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.6}}
                    >
                        {/* Texto */}
                        <div className="md:w-2/3 md:pl-6 mr-3 text-rt-green">
                            <h3 className="text-2xl font-bold mb-4">Atendimento Individualizado</h3>
                            <p>
                                Entendemos que cada residente é único, com suas próprias experiências, desafios e metas.
                                Por isso, oferecemos um atendimento individualizado, planejado para atender às
                                necessidades de cada morador.
                            </p>
                            <div className="flex flex-col justify-center max-w-64 items-center mx-auto mt-6">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5547999604301&text=Entrei%20em%20contato%20pelo%20novo%20site.%20"
                                    target="_blank"
                                    className="flex gap-2 items-center justify-center bg-rt-green mb-12 text-rt-info px-4 py-2 rounded-full font-semibold hover:bg-rt-dark transition text-sm md:text-base"
                                >
                                    <WhatsAppIcon/>
                                    Entre em Contato
                                </a>
                            </div>
                        </div>
                        {/* Imagem */}
                        <div className="md:w-1/3">
                            <motion.div
                                className="w-full h-auto rounded-lg"
                                initial={{opacity: 0, scale: 0.95}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5}}
                            >
                                <Image src={about2} alt="about 2 " className="rounded-lg"/>
                            </motion.div>
                        </div>
                    </motion.div>
                    {/*card 3*/}
                    <motion.div
                        className="flex flex-col md:flex-row bg-rt-white p-6 shadow-lg rounded-lg"
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
                                <Image src={about3} alt="about 3 " className="rounded-lg"/>
                            </motion.div>
                        </div>
                        {/* Texto */}
                        <div className="md:w-2/3 md:pl-6 text-rt-green">
                            <h3 className="text-2xl font-bold mb-4">Acompanhamento</h3>
                            <p>
                                Cada residente conta com o suporte de profissionais que trabalham juntos para oferecer
                                acompanhamento conforme necessário para refletir o progresso e as novas necessidades que
                                possam surgir ao longo da moradia.
                            </p>
                            <div className="flex flex-col justify-center max-w-64 items-center mx-auto mt-6">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5547999604301&text=Entrei%20em%20contato%20pelo%20novo%20site.%20"
                                    target="_blank"
                                    className="flex gap-2 items-center justify-center bg-rt-green mb-12 text-rt-info px-4 py-2 rounded-full font-semibold hover:bg-rt-dark transition text-sm md:text-base"
                                >
                                    <WhatsAppIcon/>
                                    Entre em Contato
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
