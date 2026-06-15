"use client";
import * as motion from "framer-motion/client";
import { FaHeart, FaEye, FaAward, FaUsers, FaShieldAlt, FaStar } from "react-icons/fa";

export default function AboutCards() {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    const cards = [
        {
            title: "Residenciais Terapêuticos",
            text: "Proporcionamos ambientes residenciais terapêuticos estruturados, fundamentados no cuidado integral, no respeito à dignidade humana e no compromisso com a qualidade de vida. Uma trajetória que reafirma diariamente a importância da inclusão social, da construção de vínculos significativos e do desenvolvimento de um espaço seguro e acolhedor para todos."
        },
        {
            title: "Residenciais Inclusivos",
            text: "Oferecemos residenciais inclusivos voltados para pessoas com deficiência, promovendo ambientes acessíveis e acolhedores que estimulam a autonomia, fortalecem a convivência comunitária e asseguram a valorização da diversidade humana. Nosso propósito é garantir que cada pessoa tenha a oportunidade de viver com dignidade, respeito e plena participação social."
        },
        {
            title: "ILPIs (Em Breve)",
            text: "Em breve ofereceremos Instituições de Longa Permanência que asseguram um domicílio coletivo para pessoas idosas, pautado na liberdade, na dignidade e na cidadania, promovendo ambientes de cuidado contínuo, respeito e valorização da experiência de vida."
        }
    ];

    const pillars = [
        {
            title: "Nossa Missão",
            text: "Acolher de forma integral, segura e humanizada pessoas em sofrimento mental ou vulnerabilidade física, restabelecendo a cidadania, dignidade e estimulando o máximo de sua autonomia cotidiana.",
            icon: FaHeart,
            color: "text-red-500",
            bgColor: "bg-red-50"
        },
        {
            title: "Nossa Visão",
            text: "Ser reconhecida como a rede de referência em cuidados terapêuticos e inclusão social em Santa Catarina, liderando pelo afeto, inovação em reabilitação singular e excelência técnica.",
            icon: FaEye,
            color: "text-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            title: "Nossos Valores",
            text: "Empatia profunda, ética inabalável, respeito absoluto à singularidade de cada indivíduo, dedicação constante ao desenvolvimento humano e inclusão social ativa na comunidade.",
            icon: FaAward,
            color: "text-amber-500",
            bgColor: "bg-amber-50"
        }
    ];

    const highlights = [
        { title: "Cuidado Humanizado", desc: "Atenção focada na pessoa, não apenas na patologia.", icon: FaUsers },
        { title: "Equipe Especializada", desc: "Profissionais qualificados em constante aperfeiçoamento.", icon: FaStar },
        { title: "Segurança & Estrutura", desc: "Ambientes adaptados com suporte contínuo 24h.", icon: FaShieldAlt }
    ];

    return (
        <div className="flex flex-col">
            {/* Core Services Section */}
            <section id="about-content" className="text-slate-700 bg-slate-50 py-24 scroll-mt-20">
                <div className="container px-5 mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="sm:text-4xl text-3xl font-bold title-font text-center text-slate-800 mb-20 max-w-4xl mx-auto leading-tight"
                    >
                        “Somos uma rede comprometida com o <span className="text-rt-green">bem-estar</span>, a <span className="text-rt-green">inclusão</span> e a construção de vínculos humanos sólidos.”
                    </motion.h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{ y: -8 }}
                                viewport={{ once: true, margin: "-50px" }}
                                variants={cardVariants}
                                className="flex flex-col"
                            >
                                <div className="flex-grow bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="w-14 h-14 inline-flex items-center justify-center rounded-2xl bg-rt-green/10 text-rt-green mb-6">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                                <path
                                                    d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9264 5.32698 19.3619C5 18.7202 5 17.8801 5 16.2V9.7774M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <h2 className="text-slate-900 text-xl font-bold mb-4">{card.title}</h2>
                                        <p className="leading-relaxed text-slate-600 text-sm md:text-base">{card.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Vision Values Section */}
            <section className="bg-white py-24 border-t border-slate-100">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-cardo mb-4">Nossa Essência</h2>
                        <div className="w-16 h-1 bg-rt-green mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    whileHover={{ y: -6 }}
                                    className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pillar.bgColor} ${pillar.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{pillar.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-rt-green text-white py-24">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold font-cardo mb-4">Por Que a Rede Salomão?</h2>
                        <p className="text-rt-primary max-w-lg mx-auto text-base md:text-lg">Pilares fundamentais que nos definem na excelência do acolhimento.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {highlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 text-rt-primary flex items-center justify-center mb-6">
                                        <Icon size={30} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xs">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}