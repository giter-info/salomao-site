import logort from "@/app/images/layout/logo-rt.png";
import logori from "@/app/images/layout/logo-ri.png";
import rt from "@/app/images/estrutura/8.jpeg";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function UnitsCards() {
    return (
        <div className="max-w-screen-xl mx-auto py-16">
            <div className="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                    className="hover:bg-slate-800 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
                    <div
                        className="py-4 px-8">
                        <Image
                            src={logort}
                            alt="logo Rt"
                            className="rounded-full h-12 w-12 mb-4"
                        />
                        <h4 className="text-lg mb-3 font-semibold">Unidade Belchior Alto</h4>
                        <p className="mb-2 text-sm text-gray-100">A unidade localizada no bairro Belchior Alto, na
                            cidade de Gaspar/SC, dispõe de 10 vagas na modalidade de Residência Terapêutica nível 1.</p>

                        <Image
                            src={rt}
                            alt="logo Rt"
                            className="w-100"/>

                        <hr className="mt-4"/>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                    className="hover:bg-slate-800 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="py-4 px-8">
                        <Image
                            src={logori}
                            alt="Logo RI"
                            className="rounded-full h-12 w-12 mb-4"
                        />
                        <h4 className="text-lg mb-3 font-semibold">Unidade Blumenau</h4>
                        <p className="mb-2 text-sm text-gray-100">A unidade localizada no bairro Itoupava Central, na
                            cidade de Blumenau/SC, dispõe de 10 vagas na modalidade de Residência Terapêutica nivel 1
                            e 10 vagas PCD nível 2.</p>

                        <Image
                            src={rt}
                            alt="Logo RI"
                            className="w-100"/>

                        <hr className="mt-4"/>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                    className="hover:bg-slate-800 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="py-4 px-8">
                        <Image
                            src={logort}
                            alt="Logo RT"
                            className="rounded-full h-12 w-12 mb-4"
                        />
                        <h4 className="text-lg mb-3 font-semibold">ILPI (Em breve)</h4>
                        <p className="mb-2 text-sm text-gray-100">Até 2026 abriremos a nova unidade na modalidade de
                            Longa Permanência para Idosos, dispondo de 20 vagas.</p>

                        <Image
                            src={rt}
                            alt="Logo RT"
                            className="w-100"/>

                        <hr className="mt-4"/>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}