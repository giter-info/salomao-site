"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import { FaHome, FaUserCheck, FaHandsHelping } from "react-icons/fa";

const iconMap = {
    FaHome,
    FaUserCheck,
    FaHandsHelping
};

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
                    {sobre.cards.map((card, index) => {
                        const IconComponent = card.icon ? iconMap[card.icon] : null;
                        return (
                            <motion.div
                                key={index}
                                className={`group p-8 rounded-3xl transition-all duration-300 ${
                                    theme.useGlass
                                        ? "bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:border-rt-primary/30"
                                        : "bg-white border border-gray-100 shadow-sm"
                                }`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {IconComponent ? (
                                    <div className="p-4 rounded-2xl bg-rt-primary/10 text-rt-primary w-fit mb-6 flex items-center justify-center transition-colors duration-300 group-hover:bg-rt-primary/20">
                                        <IconComponent size={32} className="transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                ) : (
                                    card.image && (
                                        <div className="relative h-48 mb-6 flex items-center justify-center">
                                            <Image
                                                className="h-full w-auto object-contain transition-transform duration-500 hover:scale-110"
                                                src={card.image}
                                                alt={card.alt}
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    )
                                )}
                                <p className={`${
                                    theme.useGlass
                                        ? "text-slate-300"
                                        : (theme.sobreText || theme.primaryBg.replace('bg-', 'text-'))
                                } text-lg leading-relaxed text-center md:text-left`}>
                                    {card.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
