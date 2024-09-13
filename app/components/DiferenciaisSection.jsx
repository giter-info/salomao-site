import * as motion from "framer-motion/client";
import Image from "next/image";
import about1 from "@/app/images/camabox.jpg";
import {WhatsAppIcon} from "@/app/components/SVGs";
import about2 from "@/app/images/about2.jpg";
import about3 from "@/app/images/about3.jpg";

export default function DiferenciaisSection(props) {
    return (
        <section id="diferenciais" className="py-12 bg-rt-info pb-12">
            <div className="container mx-auto px-4 ">
                <motion.h2
                    className="text-4xl font-bold text-rt-green text-center mb-8 mt-16"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Nossos Diferenciais
                </motion.h2>
                <motion.p
                    className="p-2 rounded-lg text-rt-green text-2xl max-w-2xl mx-auto mb-12 md:text-center text-left"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    O programa de atividades, coordenado pela equipe terapêutica é construído após criteriosa avaliação
                    respeitando as necessidades de cada um.
                </motion.p>
                <div className="flex flex-wrap gap-3 mt-6 text-left mx-4">
                    <ul className="flex flex-col mx-auto list-disc text-rt-green text-lg">
                        <li>Acolhimento humanizado</li>
                        <li>Serviços de Psicologia aos familiares</li>
                        <li>Acompanhamento psicológico</li>
                    </ul>
                    <ul className="flex flex-col mx-auto list-disc text-rt-green text-lg">
                        <li>Arteterapia</li>
                        <li>Musicoterapia</li>
                        <li>Atualização da Rotina da casa com <br/>fotos e vídeos em grupo do Whatsapp</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}