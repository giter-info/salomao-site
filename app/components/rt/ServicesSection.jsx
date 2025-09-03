import * as motion from "framer-motion/client";
import service1 from "@/app/images/home/service1.svg";
import service2 from "@/app/images/home/service2.svg";
import service3 from "@/app/images/home/service3.svg";
import Image from "next/image";

export default function ServicesSection() {
    return (
        <section id="servicos" className="py-2 bg-rt-green scroll-mt-12 mb-14">
            <div className="container mx-auto px-4 text-rt-green">
                <motion.h2
                    className="text-4xl font-bold text-rt-info text-center mb-8 mt-16"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Nossos Serviços
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <Image className="p-10" src={service1} alt="Residência Terapêutica"/>
                        <h3 className="text-2xl font-bold mb-4">Atendimento Individualizado</h3>
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
                            Incentivamos a participação ativa dos moradores na construção do seu plano de cuidados.
                            Acreditamos que a autonomia e a autoexpressão são fundamentais para o sucesso do processo
                            terapêutico.
                            Dessa forma, os moradores são sempre ouvidos e têm voz nas decisões pessoais e comunitárias
                            que impactam seu bem-estar.
                        </p>
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
