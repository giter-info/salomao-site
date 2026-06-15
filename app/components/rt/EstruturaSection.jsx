"use client";
import { motion } from "framer-motion";
import CardsComponent from "@/app/components/rt/CardsComponent";

export default function EstruturaSection() {
    return (
        <section id="estrutura" className="bg-rt-green py-20 scroll-mt-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-rt-info text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Conheça a Nossa Estrutura
                </motion.h2>
                <motion.p
                    className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-16 text-center leading-relaxed font-light"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    De acordo com a Portaria GM/MS Nº 3.090/2011, a estrutura do Residencial Salomão foi planejada com o objetivo de proporcionar aos moradores um ambiente acolhedor, seguro e com cara de lar, dispondo de:
                </motion.p>
                <CardsComponent />
            </div>
        </section>
    );
}