"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";

export default function SharedSobreSection({ config }) {
    const { sobre, theme } = config;

    if (!sobre) return null;

    return (
        <section id="sobre" className={`${theme.sobreBg} pt-20 pb-16 scroll-mt-14 overflow-hidden`}>
            <div className="container mx-auto px-4 ">
                <motion.h2
                    className={`text-4xl md:text-5xl font-bold ${theme.primaryBg === 'bg-rt-green' ? theme.textAccent : theme.textPrimary} text-center pb-12`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {sobre.title}
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {sobre.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 shadow-sm rounded-3xl border border-gray-100 transition-all duration-300"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="relative h-48 mb-6 flex items-center justify-center">
                                <Image
                                    className="h-full w-auto object-contain transition-transform duration-500 hover:scale-110"
                                    src={card.image}
                                    alt={card.alt}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <p className={`${theme.sobreText || theme.primaryBg.replace('bg-', 'text-')} text-lg leading-relaxed text-center md:text-left`}>
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
