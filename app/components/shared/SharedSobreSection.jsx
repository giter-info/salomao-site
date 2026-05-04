import * as motion from "framer-motion/client";
import Image from "next/image";

export default function SharedSobreSection({ config }) {
    const { sobre, theme } = config;

    if (!sobre) return null;

    return (
        <section id="sobre" className={`${theme.sobreBg} pt-16 pb-12 scroll-mt-14`}>
            <div className="container mx-auto px-4 ">
                <motion.h2
                    className={`text-4xl font-bold ${theme.primaryBg === 'bg-rt-green' ? theme.textAccent : theme.textPrimary} text-center pb-8 `}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    {sobre.title}
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {sobre.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 shadow-lg rounded-lg"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.2}}
                        >
                            <Image className="h-60 p-10 mx-auto" src={card.image} alt={card.alt}/>
                            <p className={`${theme.sobreText || theme.primaryBg.replace('bg-', 'text-')} text-lg`}>
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
