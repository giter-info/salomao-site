"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";

const Card = ({ title, fullText, isOpen, onToggle }) => {
    // Generate paragraphs
    const extractParagraph = (obj) => {
        return Object.entries(obj).map(([key, value]) => (
            <p className="mt-3 text-slate-700 text-sm md:text-base leading-relaxed" key={key}>
                {value}
            </p>
        ));
    };

    // Get the first paragraph preview
    const firstParagraph = fullText[1] || "";
    const previewText = firstParagraph.length > 180 ? firstParagraph.slice(0, 180) + "..." : firstParagraph;

    return (
        <motion.div 
            layout
            className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
        >
            <div 
                className="p-6 md:p-8 cursor-pointer flex justify-between items-start gap-4 select-none"
                onClick={onToggle}
            >
                <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-rt-green font-cardo mb-2">
                        {title}
                    </h3>
                    <AnimatePresence initial={false}>
                        {!isOpen && (
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-slate-500 text-sm leading-relaxed mt-1"
                            >
                                {previewText}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2.5 rounded-full bg-slate-50 text-rt-green/80 flex items-center justify-center mt-1"
                >
                    <FaChevronDown className="text-sm" />
                </motion.div>
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
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

export default function CardsGrid() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const [openCardIndex, setOpenCardIndex] = useState(null);

    const categories = [
        { id: "all", name: "Todos" },
        { id: "schiz", name: "Esquizofrenia" },
        { id: "psych", name: "Transtornos Psicóticos" },
        { id: "mood", name: "Humor & Depressão" }
    ];

    const cardsData = [
        {
            category: "schiz",
            title: "Esquizofrenia (F20.-)",
            fullText: {
                1: "Os sintomas característicos da esquizofrenia envolvem uma gama de disfunções cognitivas, comportamentais e emocionais. O diagnóstico envolve o reconhecimento de um conjunto de sinais e sintomas associados a um funcionamento profissional ou social prejudicado. Indivíduos com o transtorno apresentarão grandes variações na maior parte das características da doença. Pelo menos dois desses sintomas devem estar presentes: delírios, alucinações ou discurso desorganizado, comportamento grosseiramente desorganizado ou catatônico.",
                2: "Os indivíduos podem manifestar uma variedade de crenças incomuns ou estranhas: ideias de referência ou pensamento mágico; podem ter experiências perceptivas raras: sentir a presença de uma pessoa invisível; seu discurso pode ser, em geral, compreensível, porém vago; seu comportamento pode ser incomum, mas não grosseiramente desorganizado. Indivíduos que eram socialmente ativos podem ficar retraídos em relação a rotinas anteriores. Esses comportamentos são frequentemente o primeiro sinal da doença.",
                3: "Sintomas de oscilação do humor podem ocorrer concomitantemente com a sintomatologia da fase ativa. Geralmente apresentam afeto inadequado (p. ex., rir na ausência de um estímulo apropriado); humor disfórico que pode assumir a forma de depressão, ansiedade ou raiva; padrão de sono perturbado (p. ex., sono durante o dia e atividade durante a noite); falta de interesse em alimentar-se ou recusa da comida; ansiedade e fobias. Déficits cognitivos podem incluir diminuições na memória declarativa, na memória de trabalho, na função da linguagem e em outras funções executivas, bem como velocidade de processamento mais lenta. Anormalidades no processamento sensorial e na capacidade inibitória, bem como redução na atenção, são também encontradas. Alguns indivíduos com psicose podem não ter consciência de seu transtorno e não perceber os sintomas da esquizofrenia, isso leva a falta de adesão ao tratamento, aumento no número de tratamentos involuntários, funcionamento psicossocial mais pobre, agressividade e hostilidade.",
            }
        }, {
            category: "psych",
            title: "Transtornos delirantes persistentes (F22.-)",
            fullText: {
                1: "A característica essencial do transtorno delirante é a presença de um ou mais delírios que persistem por pelo menos um mês. Não é feito o diagnóstico de transtorno delirante se o indivíduo alguma vez teve apresentação de sintomas para esquizofrenia. Independentemente do impacto direto dos delírios, prejuízos no funcionamento psicossocial podem estar mais circunscritos que os encontrados em outros transtornos psicóticos como a esquizofrenia, e o comportamento não é claramente bizarro ou esquisito.",
                2: "Problemas sociais, conjugais ou profissionais podem ser consequências de crenças ou transtorno delirante. Indivíduos com transtorno delirante podem ser capazes de descrever, de forma factual, que outras pessoas veem suas crenças como irracionais; são incapazes, no entanto, de aceitar isso. Muitos indivíduos desenvolvem humor irritável ou disfórico, que costuma ser compreendido como uma reação às suas crenças delirantes. Raiva e comportamento violento podem ocorrer com os tipos persecutório, ciumento e erotomaníaco. A pessoa pode se envolver em comportamento litigioso ou antagonista.",
            }
        }, {
            category: "psych",
            title: "Transtornos psicóticos agudos e transitórios (F23.-)",
            fullText: {
                1: "A característica essencial do transtorno psicótico breve consiste em uma perturbação que envolve o aparecimento repentino de pelo menos um dos seguintes sintomas psicóticos positivos: delírios, alucinações, discurso desorganizado ou comportamento psicomotor grosseiramente anormal, incluindo catatonia (forma de esquizofrenia que apresenta uma alternância entre períodos de passividade e de negativismo e períodos de súbita excitação). Início súbito é definido como uma mudança de um estado não psicótico para um estado claramente psicótico em duas semanas, geralmente sem sintomas prévios. Um episódio da perturbação tem duração mínima de um dia e a pessoa eventualmente tem um retorno completo ao nível de funcionamento.",
                2: "Pessoas com transtorno psicótico breve costumam vivenciar turbulência emocional ou grande confusão. Podem apresentar mudanças rápidas de um afeto intenso a outro. Ainda que a perturbação seja breve, o nível de prejuízo pode ser grave, podendo haver necessidade de supervisão para garantir o atendimento às necessidades nutricionais e higiênicas e para que a pessoa fique protegida das consequências de julgamento insatisfatório, prejuízo cognitivo ou atos baseados em delírios. Há risco aumentado de comportamento suicida, particularmente durante o episódio agudo.",
            }
        }, {
            category: "mood",
            title: "Transtorno Afetivo Bipolar (F31-)",
            fullText: {
                1: "O transtorno afetivo bipolar caracteriza-se por um curso clínico de episódios de humor recorrentes, consistindo em um ou mais episódios depressivos e pelo menos um episódio hipomaníaco, além de os sintomas representarem uma mudança notável do comportamento e do funcionamento habitual do indivíduo. Os episódios depressivos ou as oscilações de humor causam sofrimento ou prejuízo clinicamente significativo no funcionamento social, profissional ou em outras áreas importantes da vida do sujeito. Os episódios hipomaníacos podem não ser vistos como patológicos ou prejudiciais, embora outras pessoas possam se sentir perturbadas por seu comportamento inadequado.",
                2: "Uma característica comum do transtorno bipolar é a impulsividade, que pode contribuir com tentativas de suicídio e transtornos por uso de substância. Pode haver níveis aumentados de criatividade em alguns casos. A relação pode ser, no entanto, não linear; isto é, grandes realizações criativas na vida têm sido associadas a formas mais leves de transtorno bipolar. A satisfação que se tem com a criatividade aumentada durante episódios hipomaníacos pode contribuir para ambivalência quanto a buscar tratamento ou prejudicar a adesão a ele.",
                3: "Episódio maníaco do tipo psicótico com características psicóticas: Delírios ou alucinações estão presentes a qualquer momento.",
                4: "Com características psicóticas congruentes com o humor: Durante episódios maníacos, o conteúdo de todos os delírios e alucinações é consistente com os temas maníacos típicos de grandiosidade, invulnerabilidade, etc.",
                5: "Com características psicóticas incongruentes com o humor: O conteúdo dos delírios e das alucinações é inconsistente com os temas da polaridade maníaca.",
                6: "Com catatonia: Este especificador pode ser aplicado a um episódio de mania ou depressão se as características de catatonia estão presentes durante a maior parte do episódio.",
            }
        }, {
            category: "schiz",
            title: "Transtornos esquizoafetivos (F25.-)",
            fullText: {
                1: "O diagnóstico de transtorno esquizoafetivo baseia-se em uma avaliação de um período ininterrupto da doença durante o qual o indivíduo continua a exibir sintomas ativos ou residuais da doença psicótica. É necessário apresentar sintomas de delírios ou alucinações e episódio depressivo ou maníaco.",
                2: "O funcionamento profissional costuma estar prejudicado, contato social restrito e dificuldades com o autocuidado também estão presentes no transtorno esquizoafetivo. Esses Indivíduos podem ter risco aumentado de desenvolvimento posterior de episódios de transtorno depressivo maior ou transtorno bipolar se os sintomas de humor continuarem após a remissão dos sintomas psicóticos.",
            }
        }, {
            category: "mood",
            title: "Episódio depressivo grave com sintomas psicóticos (F32.3)",
            fullText: {
                1: "Esta categoria aplica-se a apresentações em que sintomas característicos de um transtorno depressivo causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida do indivíduo.",
                2: "Delírios e/ou alucinações estão presentes. Delírios e alucinações cujo conteúdo é coerente ou não com os episódios depressivos típicos de inadequação pessoal, culpa, doença, morte, niilismo ou punição merecida.",
            }
        }, {
            category: "psych",
            title: "Psicose alucinatória crônica (F29)",
            fullText: {
                1: "Esta categoria aplica-se a apresentações em que sintomas psicóticos causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida do indivíduo, mas não satisfazem os critérios para esquizofrenia e outros transtornos psicóticos.",
            }
        }, {
            category: "psych",
            title: "Outros Transtornos psicóticos não-orgânicos (F28)",
            fullText: {
                1: "O transtorno psicótico não-orgânico é uma condição reversível ou não de disfunção mental, que pode ser identificada como um distúrbio da anatomia fisiologia ou bioquímica do cérebro.",
                2: "Envolvem transtornos alucinatórios ou delirantes, assim como modificações de pensamento passando a ser mais desorganizados, e de personalidade que causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida do indivíduo.",
            }
        }
    ];

    const filteredCards = cardsData.filter(card => {
        const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            Object.values(card.fullText).some(paragraph => paragraph.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesTab = activeTab === "all" || card.category === activeTab;
        
        return matchesSearch && matchesTab;
    });

    const handleCardToggle = (index) => {
        setOpenCardIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Search and Filters panel */}
            <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full md:max-w-xs">
                    <input
                        type="text"
                        placeholder="Buscar doença ou sintoma..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-10 py-3 rounded-full border border-slate-200 bg-white/80 focus:bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rt-green/20 focus:border-rt-green transition-all"
                        id="disease-search-input"
                    />
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            <FaTimes className="text-sm" />
                        </button>
                    )}
                </div>

                {/* Categories Tab Selection */}
                <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
                    {categories.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                setOpenCardIndex(null);
                            }}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all ${
                                activeTab === tab.id
                                    ? "bg-rt-green text-white shadow-md shadow-rt-green/10"
                                    : "bg-white text-slate-600 border border-slate-100 hover:bg-slate-50"
                            }`}
                            id={`tab-filter-${tab.id}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredCards.length > 0 ? (
                        filteredCards.map((card, index) => {
                            // Find unique identifier index based on full data array
                            const dataIndex = cardsData.findIndex(d => d.title === card.title);
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card
                                        title={card.title}
                                        fullText={card.fullText}
                                        isOpen={openCardIndex === dataIndex}
                                        onToggle={() => handleCardToggle(dataIndex)}
                                    />
                                </motion.div>
                            );
                        })
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12 bg-white rounded-3xl border border-slate-100"
                        >
                            <p className="text-slate-500 font-medium">Nenhum resultado encontrado para a busca ou filtro.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveTab("all");
                                }}
                                className="mt-4 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-rt-green hover:bg-green-800 transition-colors"
                            >
                                Limpar filtros
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
