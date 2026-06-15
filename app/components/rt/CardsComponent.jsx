"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import about1 from "@/app/images/home/about1.jpg";
import about3 from "@/app/images/home/about3.jpg";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function CardsComponent() {
    const equipeColumn1 = [
        "Coordenação",
        "Assistente Social",
        "Psicólogas"
    ];

    const equipeColumn2 = [
        "Cozinheiro",
        "Cuidadores em Saúde",
        "Musicoterapeuta"
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="grid gap-8 grid-cols-1">
            {/* Card 1: Equipe */}
            <motion.div
                className="group flex flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-6 md:p-8 rounded-3xl transition-all duration-300 hover:border-rt-primary/30 gap-6 lg:gap-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Imagem */}
                <div className="w-full md:w-1/3 min-h-[200px] relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                    <Image
                        src={about3}
                        alt="Equipe"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>

                {/* Conteúdo */}
                <div className="w-full md:w-2/3 flex flex-col justify-center text-left">
                    <h3 className="text-2xl font-bold text-white font-cardo mb-4">
                        Equipe Profissional Interdisciplinar
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                        <ul className="flex flex-col gap-2.5 text-slate-300 text-base md:text-lg">
                            {equipeColumn1.map((item, index) => (
                                <li key={index} className="flex items-center gap-2.5">
                                    <FaCheckCircle className="text-rt-primary shrink-0 text-sm" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-2.5 text-slate-300 text-base md:text-lg">
                            {equipeColumn2.map((item, index) => (
                                <li key={index} className="flex items-center gap-2.5">
                                    <FaCheckCircle className="text-rt-primary shrink-0 text-sm" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-rt-primary text-base md:text-lg font-medium mt-6">
                        → Acompanhamento na Rede de Apoio Psicossocial (RAPS)
                    </p>
                </div>
            </motion.div>

            {/* Card 2: Espaço */}
            <motion.div
                className="group flex flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-6 md:p-8 rounded-3xl transition-all duration-300 hover:border-rt-primary/30 gap-6 lg:gap-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Imagem */}
                <div className="w-full md:w-1/3 min-h-[200px] relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
                    <Image
                        src={about1}
                        alt="Espaço"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>

                {/* Conteúdo */}
                <div className="w-full md:w-2/3 flex flex-col justify-center text-left">
                    <h3 className="text-2xl font-bold text-white font-cardo mb-4">
                        Amplo Espaço Físico
                    </h3>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                        Cada ambiente foi pensado e planejado de forma a garantir a privacidade, a segurança e respeitar a individualidade de cada um dos nossos moradores, promovendo um clima residencial e acolhedor.
                    </p>
                    
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-fit"
                    >
                        <Link
                            href="/residencial-terapeutico/unidades"
                            className="inline-flex items-center gap-2 bg-rt-primary hover:bg-rt-info text-rt-green font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-rt-primary/20 text-sm"
                        >
                            Conheça nossas unidades <FaArrowRight className="text-xs" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
