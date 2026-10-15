"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import {FaHome, FaUserCheck, FaHandsHelping} from "react-icons/fa";

const iconMap = {
    FaHome,
    FaUserCheck,
    FaHandsHelping
};

export default function SharedSobreSection({config}) {
    const {sobre} = config;

    if (!sobre) return null;

    return (
        <section id="sobre" className="bg-brand-offwhite dark:bg-brand-green-dark pt-24 pb-20 scroll-mt-14 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="inline-block text-brand-green dark:text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Sobre Nós</span>
                    <motion.h2
                        className="font-serif text-4xl md:text-5xl text-brand-green dark:text-brand-offwhite mt-3"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8}}
                    >
                        {sobre.title}
                    </motion.h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {sobre.cards.map((card, index) => {
                        const IconComponent = card.icon ? iconMap[card.icon] : null;
                        return (
                            <motion.div
                                key={index}
                                className="surface-card p-8"
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                whileHover={{y: -10}}
                                viewport={{once: true, margin: "-50px"}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                            >
                                {IconComponent ? (
                                    <div className="p-4 rounded-2xl bg-brand-green/10 dark:bg-brand-gold/15 text-brand-green dark:text-brand-gold-light w-fit mb-6 flex items-center justify-center">
                                        <IconComponent size={32}/>
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
                                <p className="text-brand-ink/75 dark:text-brand-offwhite/80 text-base leading-relaxed text-center md:text-left">
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
