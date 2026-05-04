"use client";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function SharedHomeSection({ config }) {
    const { home, theme } = config;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const textStyle = theme.primaryBg === 'bg-rt-green'
        ? theme.textPrimary
        : theme.primaryBg.replace('bg-', 'text-');

    return (
        <section id="home" className={`relative min-h-[90vh] flex items-center overflow-hidden ${theme.homeBg}`}>
            {theme.homeBgImage && (
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 -z-10"
                >
                    <Image
                        src={theme.homeBgImage}
                        alt={home.titleLine1}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/10" />
                </motion.div>
            )}
            <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto max-w-2xl py-10 sm:py-12"
                >
                    <motion.div
                        variants={itemVariants}
                        className="sm:mb-8 flex justify-center"
                    >
                        <div className="relative group">
                            <Image
                                src={home.logo}
                                alt="Logo"
                                className="w-40 md:w-56 xl-64 h-auto mx-auto"
                                priority
                            />
                        </div>
                    </motion.div>
                    <div className="text-center">
                        <motion.h1
                            variants={itemVariants}
                            className={`${home.fontFamily} text-4xl xl:text-7xl font-bold ${textStyle} drop-shadow-sm`}
                        >
                            {home.titleLine1}
                        </motion.h1>
                        <motion.h1
                            variants={itemVariants}
                            className={`${home.fontFamily} text-4xl xl:text-7xl font-bold ${textStyle} mb-6 drop-shadow-sm`}
                        >
                            {home.titleLine2}
                        </motion.h1>
                        <motion.h2
                            variants={itemVariants}
                            className={`text-xl font-medium ${textStyle} opacity-90 mb-8 max-w-xl mx-auto leading-relaxed`}
                        >
                            {home.subtitle}
                        </motion.h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}