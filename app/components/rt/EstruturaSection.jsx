import * as motion from "framer-motion/client";
import CardsConponent from "@/app/components/rt/CardsComponent";

export default function EstruturaSection() {
    return (
        <section id="estrutura" className=" bg-rt-green pt-4 pb-12 scroll-mt-20">
            <div className="rounded-3xl bg-rt-info py-16 mx-4 lg:mx-16 ">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-4xl font-bold text-rt-green text-center mb-8"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Conheça a Nossa Estrutura
                    </motion.h2>
                    <motion.p
                        className="p-2 rounded-lg text-rt-green text-xl max-w-2xl mx-auto mb-12 text-center"
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