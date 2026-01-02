// SobreSection.jsx
import * as motion from "framer-motion/client";
import Image from "next/image";
import service1 from "@/app/images/home/diferencial1.svg";
import service2 from "@/app/images/home/diferencial2.svg";
import service3 from "@/app/images/home/diferencial3.svg";

export default function SobreSection() {
    return (
        <section id="sobre" className="bg-ri-greenest pt-16 pb-12 scroll-mt-14">
            <div className="container mx-auto px-4 ">
                <motion.h2
                    className="text-4xl font-bold text-rt-white text-center pb-8 "
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
                        <Image className="h-60 p-10" src={service1} alt="Residência Terapêutica"/>
                        <p className="text-ri-primary text-lg">
                            O Residencial nasceu da percepção de que nosso território precisava de um espaço inclusivo,
                            capaz de acolher pessoas em suas singularidades, fortalecer vínculos e promover autonomia,
                            em diálogo com a rede de cuidados já existente.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        <Image className="h-60 p-10" src={service2} alt="Atendimento Individualizado"/>
                        <p className="text-ri-primary text-lg">
                            Esse trabalho nasce do compromisso com o cuidado em liberdade e com a construção de um
                            espaço de acolhimento, respeito e pertencimento. Valorizamos princípios éticos, morais,
                            relacionais e espirituais, apoiando cada pessoa em sua trajetória de autonomia, convivência
                            social e participação cultural.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white p-6 shadow-lg rounded-lg"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.4}}
                    >
                        <Image className="h-60 p-10" src={service3} alt="Acompanhamento"/>
                        <p className="text-rt-green text-lg">
                            Nosso cuidado é orientado pela promoção da dignidade, da cidadania, da liberdade e da
                            autonomia. O acompanhamento diário, realizado por uma equipe preparada e atenta às
                            necessidades individuais, aliado aos cuidados em saúde quando indicados, favorece o
                            bem-estar, a estabilidade e a construção de uma vida mais autônoma e integrada à comunidade.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
