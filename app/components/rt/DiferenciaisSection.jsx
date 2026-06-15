"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import about2 from "@/app/images/home/about2.jpg";
import { FaCheckCircle } from "react-icons/fa";

export default function DiferenciaisSection() {
    const differentialsLeft = [
        "Acolhimento humanizado",
        "Serviços de Psicologia aos familiares",
        "Acompanhamento na Rede de Apoio Psicossocial",
        "Arteterapia"
    ];

    const differentialsRight = [
        "Musicoterapia",
        "Atualização da rotina da casa com fotos e vídeos em grupo do WhatsApp"
    ];

    return (
        <section id="diferenciais" className="bg-rt-green py-20 scroll-mt-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-rt-info text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Nossos Diferenciais
                </motion.h2>
                
                <motion.div
                    className="flex flex-col lg:flex-row bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10 gap-8 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Imagem */}
                    <div className="w-full lg:w-2/5">
                        <motion.div
                            className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg border border-white/10"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={about2}
                                alt="Diferenciais"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                        </motion.div>
                    </div>

                    {/* Conteúdo */}
                    <div className="w-full lg:w-3/5 text-rt-white">
                        <h3 className="text-xl md:text-2xl font-bold text-white font-cardo mb-6 leading-snug">
                            O programa de atividades, coordenado pela equipe terapêutica, é construído após criteriosa avaliação respeitando as necessidades de cada um.
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            <ul className="flex flex-col gap-4 text-slate-300 text-base md:text-lg">
                                {differentialsLeft.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-rt-primary shrink-0 mt-1.5 text-lg" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex flex-col gap-4 text-slate-300 text-base md:text-lg">
                                {differentialsRight.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-rt-primary shrink-0 mt-1.5 text-lg" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}