import * as motion from "framer-motion/client";
import CardsConponent from "@/app/components/CardsConponent";

export default function EstruturaSection(props) {
    return (
        <section id="estrutura" className="pb-12 bg-rt-green">
            <div className="rounded-3xl bg-rt-info py-16 mx-4 lg:mx-16 ">
                <div className="container mx-auto px-4 pt-32">
                    <motion.h2
                        className="text-4xl font-bold text-rt-green text-center mb-8"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Conheça a Nossa Estrutura
                    </motion.h2>
                    <motion.p
                        className="p-2 rounded-lg text-rt-green text-2xl max-w-2xl mx-auto mb-12 md:text-center text-left"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        De acordo com a Portaria GM/MS Nº 3.090/2011 a estrutura do Residencial Salomão foi pensada com
                        o
                        objetivo de proporcionar aos moradores uma residência, contendo:
                    </motion.p>
                    <CardsConponent/>
                </div>
            </div>
        </section>
    );
}