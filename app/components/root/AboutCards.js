"use client";
import * as motion from "framer-motion/client";

export default function aboutCards() {
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
            title: "ILPIs",
            text: "Em breve vamos oferecer Instituições de Longa Permanência que asseguram um domicílio coletivo para pessoas idosas, pautado na liberdade, na dignidade e na cidadania, promovendo ambientes de cuidado contínuo, respeito e valorização da experiência de vida."
        }
    ];

    return (
        <section id="about-content" className="text-gray-400 bg-slate-50 body-font py-24 scroll-mt-20">
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
                <div className="flex flex-wrap -m-4">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ y: -8 }}
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            className="p-4 md:w-1/3 flex"
                        >
                            <div className="flex-grow bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 inline-flex items-center justify-center rounded-2xl bg-rt-green/10 text-rt-green mb-6">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                                        <path
                                            d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9264 5.32698 19.3619C5 18.7202 5 17.8801 5 16.2V9.7774M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <h2 className="text-slate-900 text-xl title-font font-bold mb-3">{card.title}</h2>
                                <p className="leading-relaxed text-slate-600 text-base">{card.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}