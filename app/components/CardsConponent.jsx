import * as motion from "framer-motion/client";
import Image from "next/image";
import about1 from "@/app/images/camabox.jpg";
import {WhatsAppIcon} from "@/app/components/SVGs";
import about2 from "@/app/images/about2.jpg";
import about3 from "@/app/images/about3.jpg";

export default function CardsConponent() {
    return (
        <div className="grid gap-8 md:grid-cols-1">
            {/* Card 1 */}
            <motion.div
                className="flex flex-col md:flex-row bg-rt-white p-6 shadow-lg rounded-lg  hover:shadow hover:shadow-rt-green "
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
                        <Image src={about3} alt="about 1 " className="rounded-lg"/>
                    </motion.div>
                </div>
                <div className="md:w-2/3 md:pl-6 text-rt-green">
                    <h3 className="text-2xl font-bold mb-4">Equipe Profissional Interdisciplinar</h3>
                    <p className="text-rt-green text-lg">
                        formada por:
                    </p>
                    <div>
                        <ul className="flex flex-col mx-auto list-disc text-rt-green text-lg px-5">
                            <li>psicólogas,</li>
                            <li>psiquiatra,</li>
                            <li>profissionais de enfermagem,</li>
                            <li>cuidadores,</li>
                            <li> musicoterapeuta.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                className="flex flex-col md:flex-row bg-rt-white p-6 shadow-lg rounded-lg  hover:shadow hover:shadow-rt-green "
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.6}}
            >
                {/* Texto */}
                <div className="md:w-2/3 md:pl-6 mr-3 text-rt-green">
                    <h3 className="text-2xl font-bold mb-4">Amplo espaço</h3>
                    <p>
                        para garantir a privacidade e respeitar a individualidade de cada um dos nossos moradores.
                    </p>
                </div>
                {/* Imagem */}
                <div className="md:w-1/3">
                    <motion.div
                        className="w-full h-auto rounded-lg"
                        initial={{opacity: 0, scale: 0.95}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <Image src={about1} alt="about 2 " className="rounded-lg"/>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}