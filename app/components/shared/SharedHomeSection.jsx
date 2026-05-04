import Image from "next/image";
import * as motion from "framer-motion/client";

export default function SharedHomeSection({ config }) {
    const { home, theme } = config;

    return (
        <section id="home" className={`${theme.homeBg} bg-cover bg-no-repeat bg-center min-h-screen flex items-center bg-white`}>
            <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                <div className="mx-auto max-w-2xl py-10 sm:py-12">
                    <div className="sm:mb-8 flex justify-center">
                        <div className={`relative px-3 py-1 text-sm leading-6 ${theme.textAccent}`}>
                            <motion.div
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 1, ease: "easeOut"}}
                            >
                                <Image
                                    src={home.logo}
                                    alt="Logo"
                                    className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="text-center">
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className={`${home.fontFamily} text-4xl xl:text-7xl font-bold ${theme.primaryBg === 'bg-rt-green' ? theme.textPrimary : theme.primaryBg.replace('bg-', 'text-')}`}
                        >
                            {home.titleLine1}
                        </motion.h1>
                        <motion.h1
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                            className={`${home.fontFamily} text-4xl xl:text-7xl font-bold ${theme.primaryBg === 'bg-rt-green' ? theme.textPrimary : theme.primaryBg.replace('bg-', 'text-')} mb-4`}
                        >
                            {home.titleLine2}
                        </motion.h1>
                        <motion.h2
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.4, ease: "easeOut"}}
                            className={`text-lg font-bold ${theme.primaryBg === 'bg-rt-green' ? theme.textPrimary : theme.primaryBg.replace('bg-', 'text-')} mb-4`}
                        >
                            {home.subtitle}
                        </motion.h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
