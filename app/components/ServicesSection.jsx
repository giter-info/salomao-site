import * as motion from "framer-motion/client";
import {WhatsAppIcon} from "@/app/components/SVGs";
import service1 from "@/app/images/service1.svg";
import service2 from "@/app/images/service2.svg";
import service3 from "@/app/images/service3.svg";
import Image from "next/image";

export default function ServicesSection() {
    return (
        <section id="servicos" className="py-16 bg-rt-info">
            <div className="container mx-auto px-4 text-rt-green">
                <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Image className="p-10" src={service1} alt="Residência Terapêutica"/>
                        <h3 className="text-2xl font-bold mb-4">Residência Terapêutica</h3>
                        <p>
                            O cuidado começa desde o momento da admissão, onde realizamos uma avaliação completa para
                            entender o histórico e o diagóstico, as condições atuais e os objetivos de cada residente.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <Image className="p-10" src={service2} alt="Atendimento Individualizado"/>
                        <h3 className="text-2xl font-bold mb-4">Autogestão e Gestão Comunitária</h3>
                        <p>
                            Incentivamos a participação ativa dos residentes na construção do seu plano de cuidados.
                            Acreditamos que a autonomia e a autoexpressão são fundamentais para o sucesso do processo
                            terapêutico.
                            Dessa forma, os residentes são sempre ouvidos e têm voz nas decisões pessoais e comunitárias
                            que impactam seu bem-estar.
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
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                    >
                        <Image className="p-10" src={service3} alt="Acompanhamento"/>
                        <h3 className="text-2xl font-bold mb-4">Acompanhamento</h3>
                        <p>
                            O atendimento individualizado no Residencial Terapêutico Salomão é um compromisso com a
                            dignidade, o respeito e a eficácia, sempre buscando proporcionar as melhores condições para
                            que cada morador possa sentir-se de fato inserido em um lar.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
