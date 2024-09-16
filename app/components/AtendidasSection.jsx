"use client";
import * as motion from "framer-motion/client";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";
import CardsGrid from "@/app/components/CardsGrid";
import {FaClinicMedical} from "react-icons/fa";

export default function AtendidasSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <section id="servicos" className="py-2 bg-rt-green scroll-mt-20 mb-14">
            <div className="container mx-auto px-4 text-rt-green">
                <motion.h2
                    className="text-4xl font-bold text-rt-info text-center mb-8 mt-16"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    Doenças Atendidas
                </motion.h2>
                <motion.p
                    className="p-2 rounded-lg text-rt-white text-md max-w-2xl mx-auto mb-12 text-center"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.2}}
                >
                    Os TRANSTORNOS PSICÓTICOS, principal enfoque do Residencial Salomão, caracterizam-se como distorções
                    do pensamento e da percepção e por afetos inapropriados ou embotados.
                    Usualmente mantém-se clara a consciência e a capacidade intelectual, embora certos déficits
                    cognitivos possam evoluir no curso do tempo. Os principais sintomas incluem o eco do pensamento, a
                    imposição ou o roubo do pensamento, a divulgação do pensamento, a percepção delirante, ideias
                    delirantes de controle, de influência ou de passividade, vozes alucinatórias que comentam ou
                    discutem com o paciente na terceira pessoa.
                </motion.p>
                <motion.div
                    className=" hover:shadow-[2px_2px_15px_2px] hover:shadow-amber-200 flex flex-col bg-rt-info py-1 px-2 shadow-lg rounded-lg cursor-pointer max-w-72 mx-auto"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    onClick={handleOpenModal} // Abre o modal quando clicado
                >
                    <p className="flex flex-row gap-2 mx-auto">
                        <FaClinicMedical className="mt-1"/>
                        Conheça as Doenças Atendidas
                    </p>
                </motion.div>
                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
                            <motion.div
                                className="bg-rt-green h-4/5 w-full xl:w-3/4 mx-4 p-2 xl:p-10 rounded-lg shadow-lg overflow-y-auto"
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.8}} // Animação ao fechar o modal
                                transition={{duration: 0.3}}
                            >
                                {/* Modal Header */}
                                <div className="flex justify-between items-center mb-6">
                                    <motion.h2
                                        className="text-2xl font-bold text-rt-primary text-left mb-8 "
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5}}
                                    >
                                        Doenças Atendidas
                                    </motion.h2>
                                    <button
                                        className="text-2xl border border-rt-primary px-2 rounded-md bg-rt-info font-bold text-rt-green"
                                        onClick={handleOpenModal} // Fecha o modal
                                    >
                                        &times;
                                    </button>
                                </div>
                                <CardsGrid/>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}