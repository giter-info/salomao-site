"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import about1 from "@/app/images/home/about1.jpg";
import about3 from "@/app/images/home/about3.jpg";
import {FaCamera} from "react-icons/fa";
import Link from "next/link";

export default function CardsComponent() {
    return (
        <>
            <div className="grid gap-8 grid-cols-1">
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
                            <Image src={about3} alt="about 1" className="rounded-lg max-h-48 w-auto"/>
                        </motion.div>
                    </div>
                    <div className="md:w-2/3 md:pl-6 text-rt-white">
                        <h3 className="text-2xl font-bold mb-4">Equipe Profissional Interdisciplinar</h3>
                        <div>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 text-left pl-5">
                                <ul className="flex flex-col list-disc text-rt-white text-lg">
                                    <li>coordenação</li>
                                    <li>assistente social</li>
                                    <li>psicólogas</li>
                                </ul>
                                <ul className="flex flex-col list-disc text-rt-white text-lg ">
                                    <li>cozinheiro</li>
                                    <li>cuidadores em saúde</li>
                                    <li>musicoterapeuta</li>
                                </ul>
                            </div>
                            <p className="text-rt-white text-lg pt-4">→ Acompanhamento na Rede de Apoio Psicosocial</p>
                        </div>
                    </div>

                </motion.div>

                {/* Card 4 - Ocupa 2 colunas em telas grandes */}
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
                            <Image src={about1} alt="about 1" className="rounded-lg max-h-48 w-auto"/>
                        </motion.div>
                    </div>
                    <div className="md:w-2/3 md:pl-6 text-rt-white">
                        <h3 className="text-2xl font-bold mb-4">Amplo espaço</h3>
                        <div>
                            <p className="text-rt-white text-lg"></p>
                            <div className="flex flex-wrap gap-1 text-left">
                               <span>onde cada ambiente foi pensado de forma a garantir a privacidade e respeitar a
                            individualidade de cada um dos nossos moradores.</span>
                                <motion.div
                                    className=" hover:shadow-[2px_2px_15px_2px] hover:shadow-amber-200 flex flex-col bg-rt-primary text-rt-green py-1 px-2 shadow-lg rounded-lg mt-6 cursor-pointer"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.6}}
                                >
                                    <Link className="flex flex-row gap-2 mx-auto" href="/estrutura">
                                        <FaCamera className="mt-1"/>
                                        Imagens da Estrutura
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
