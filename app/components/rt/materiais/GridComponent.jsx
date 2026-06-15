"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFileAlt, FaArrowRight } from "react-icons/fa";

export default function MateriaisGridComponent() {
    const cardsData = [
        {
            title: "PORTARIA Nº 106, DE 11 DE FEVEREIRO DE 2000",
            description: "Emitido pelo Ministério da Saúde, esta portaria cria o Serviço Residencial Terapêutico (SRT) e norteia todas as diretrizes básicas para o seu funcionamento.",
            link: "https://cetadobserva.ufba.br/sites/cetadobserva.ufba.br/files/106_0.pdf"
        },
        {
            title: "PORTARIA Nº 3.090, DE 23 DE DEZEMBRO DE 2011",
            description: "Altera a Portaria nº 106/GM/MS e dispõe, no âmbito da Rede de Atenção Psicossocial, sobre o repasse de recursos de incentivo de custeio e custeio mensal para implantação e funcionamento dos SRTs.",
            link: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt3090_23_12_2011_rep.html"
        },
    ];

    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            {cardsData.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between h-full"
                >
                    <div>
                        <div className="p-3 rounded-2xl bg-rt-primary/10 text-rt-green w-fit mb-6">
                            <FaFileAlt size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-rt-green font-cardo mb-3 leading-snug">
                            {card.title}
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                            {card.description}
                        </p>
                    </div>
                    <div>
                        <Link
                            href={card.link}
                            className="inline-flex items-center justify-center gap-2 w-full bg-rt-green hover:bg-green-950 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-rt-green/20 text-sm"
                            target="_blank"
                        >
                            Acessar o material <FaArrowRight className="text-xs" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}