"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Card = ({ title, fullText, isOpen, onToggle }) => {
    const extractParagraph = (obj) => {
        return Object.entries(obj).map(([key, value]) => (
            <p className="mt-2 text-slate-700 text-sm md:text-base leading-relaxed" key={key}>
                {value}
            </p>
        ));
    };

    return (
        <motion.div 
            layout
            className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
        >
            <div 
                className="p-6 md:p-8 cursor-pointer flex justify-between items-center gap-4 select-none"
                onClick={onToggle}
            >
                <h3 className="text-lg md:text-xl font-bold text-rt-green font-cardo">
                    {title}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-full bg-slate-50 text-rt-green/80 flex items-center justify-center shrink-0"
                >
                    <FaChevronDown className="text-xs" />
                </motion.div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-slate-100 bg-slate-50/50"
                    >
                        <div className="p-6 md:p-8">
                            {extractParagraph(fullText)}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function CardsGridComponent() {
    const [openIndex, setOpenIndex] = useState(null);

    const cardsData = [
        {
            title: "É um lar de idosos?",
            fullText: {
                1: "Um Residencial Terapêutico não é um lar de idosos: Embora possa acolher pessoas de diferentes idades, o foco principal do Residencial Terapêutico não está no cuidado de idosos que precisam de auxílio diário para as atividades comuns da vida.",
                2: "O objetivo aqui é atender pessoas com transtornos mentais graves, oferecendo suporte para sua autonomia e qualidade de vida, algo muito além do que é praticado em uma casa de repouso ou lar de idosos.",
            }
        }, {
            title: "É uma clínica psiquiátrica?",
            fullText: {
                1: "Ao contrário de uma clínica, não há internações de curto ou longo prazo voltadas para tratamentos médicos intensivos.",
                2: "Em vez disso, o Residencial Terapêutico oferece um ambiente de moradia contínua, com suporte especializado e tratamento focado em reintegração social.",
                3: "Aqui, as pessoas são acolhidas para viver, não para ser hospitalizadas."
            }
        }, {
            title: "É uma comunidade terapêutica?",
            fullText: {
                1: "Diferente das comunidades terapêuticas, que são voltadas para o tratamento de pessoas com dependência de substâncias, o Residencial Terapêutico é um espaço para acolhimento de pessoas com transtornos mentais que, por diversos motivos, não têm como retornar às suas famílias ou que precisam de suporte diário após a alta hospitalar. ",
                2: "Ele proporciona cuidado especializado sem o caráter de recuperação de dependência."
            }
        }, {
            title: "Então, o que é um Residencial Terapêutico?",
            fullText: {
                1: "Um Residencial Terapêutico é uma moradia assistida, projetada para atender pessoas com transtornos mentais que, muitas vezes, não têm condições de morar com familiares ou estão sem alternativas de moradia após serem desinternadas de hospitais psiquiátricos.",
                2: "Ele oferece um lar estruturado e seguro, com o apoio de uma equipe multidisciplinar especializada, garantindo o acompanhamento necessário para que os moradores possam viver com dignidade e, sempre que possível, recuperar sua autonomia e se reintegrar à sociedade. "
            }
        }, {
            title: "Meu familiar está em surto psiquiátrico. Posso acionar o residencial?",
            fullText: {
                1: "O Residencial é um espaço para pacientes estáveis, ou seja, em caso de surto ele deve, primeiramente, ser encaminhado através do SAMU a um serviço de emergência para estabilização e, após a alta, ser encaminhado ao Serviço de Residência Terapêutica.",
            }
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4 py-8">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    fullText={card.fullText}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
}