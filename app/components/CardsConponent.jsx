"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import about1 from "@/app/images/about1.jpg";
import about3 from "@/app/images/about3.jpg";
import click1 from "@/app/images/click1.svg";
import click2 from "@/app/images/click2.svg";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";
import CardsGrid from "@/app/components/CardsGrid";

export default function CardsComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 - Ocupa 2 colunas em telas grandes */}
                <motion.div
                    className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row bg-rt-green p-6 shadow-lg rounded-lg hover:shadow hover:shadow-rt-green"
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
                            <Image src={about3} alt="about 1" className="rounded-lg"/>
                        </motion.div>
                    </div>
                    <div className="md:w-2/3 md:pl-6 text-rt-white">
                        <h3 className="text-2xl font-bold mb-4">Equipe Profissional Interdisciplinar</h3>
                        <div>
                            <p className="text-rt-white text-lg"></p>
                            <div className="flex flex-wrap gap-3 text-left px-5">
                                <ul className="flex flex-col list-disc text-rt-white text-lg">
                                    <li className="list-none">formada por:</li>
                                    <li>psicólogas</li>
                                    <li>psiquiatra</li>
                                </ul>
                                <ul className="flex flex-col list-disc text-rt-white text-lg mx-auto">
                                    <li>profissionais de enfermagem</li>
                                    <li>cuidadores</li>
                                    <li>musicoterapeuta</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Card 2 - Ocupa 1 coluna */}
                <motion.div
                    className="flex flex-col bg-rt-green p-6 shadow-lg rounded-lg hover:shadow-lg hover:shadow-rt-green
                    cursor-pointer hover:border-2 hover:border-rt-info"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    onClick={openModal} // Abre o modal quando clicado
                >
                    {/* Texto */}
                    <div className="text-rt-white">
                        <h3 className="text-2xl text-center font-bold mb-4">Clique aqui!</h3>
                    </div>
                    <div className="grid grid-cols-2">
                        <Image className="px-6" src={click1} alt="Click 1"/>
                        <motion.p
                            className="text-rt-info mx-auto text-left"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            Conheça as doenças que são atendidas.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Card 3 - Ocupa 1 coluna */}
                <motion.div
                    className="flex flex-col bg-rt-green p-6 shadow-lg rounded-lg hover:shadow hover:shadow-rt-green cursor-not-allowed"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                    // onClick={openModal} // Abre o modal quando clicado
                >
                    {/* Texto */}
                    <div className="text-rt-white">
                        <h3 className="text-2xl text-center font-bold mb-4">Clique aqui!</h3>
                    </div>
                    <div className="grid grid-cols-2">
                        <motion.p
                            className="text-rt-info mx-auto text-left"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            para ver mais imagens do Residencial Terapêutico Salomão.
                            <br/> (Em breve)
                        </motion.p>
                        <Image className="px-6 h-2/3" src={click2} alt="Click 1"/>
                    </div>
                </motion.div>

                {/* Card 4 - Ocupa 2 colunas em telas grandes */}
                <motion.div
                    className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row bg-rt-green p-6 shadow-lg rounded-lg hover:shadow hover:shadow-rt-green"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                >
                    {/* Texto */}
                    <div className="md:w-2/3 md:pl-6 text-rt-white">
                        <h3 className="text-2xl font-bold mb-4">Amplo espaço</h3>
                        <p>onde cada ambiente foi pensado de forma a garantir<br/>
                            a privacidade e respeitar a individualidade de cada <br/>
                            um dos nossos moradores. </p>
                    </div>

                    {/* Imagem */}
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <motion.div
                            className="w-full h-auto rounded-lg"
                            initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <Image src={about1} alt="about 1" className="rounded-lg"/>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
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
                                    onClick={closeModal} // Fecha o modal
                                >
                                    &times;
                                </button>
                            </div>

                            <motion.h2
                                className="text-4xl font-bold text-rt-primary text-center mb-8 "
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >

                            </motion.h2>

                            <p className="text-lg mb-6">
                                Os TRANSTORNOS PSICÓTICOS, principal enfoque do Residencial Salomão, caracterizam-se
                                como distorções do pensamento e da percepção e por afetos inapropriados ou
                                embotados.
                                Usualmente mantém-se clara a consciência e a capacidade intelectual, embora certos
                                déficits cognitivos possam evoluir no curso do tempo. Os principais sintomas incluem
                                o
                                eco do pensamento, a imposição ou o roubo do pensamento, a divulgação do pensamento,
                                a
                                percepção delirante, ideias delirantes de controle, de influência ou de passividade,
                                vozes alucinatórias que comentam ou discutem com o paciente na terceira pessoa.
                            </p>

                            <CardsGrid/>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
