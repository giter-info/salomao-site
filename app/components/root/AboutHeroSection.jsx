"use client";
import * as motion from "framer-motion/client";
import RedeIconLinks from "@/app/components/layout/RedeIconLinks";
import { FaChevronDown } from "react-icons/fa";

export default function AboutHeroSection() {
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
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    const scrollToContent = () => {
        const nextSection = document.getElementById('about-content');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 -z-10 bg-hands bg-cover bg-no-repeat bg-center"
            >
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto max-w-2xl py-10 sm:py-12"
                >
                    <motion.div variants={itemVariants}>
                        <RedeIconLinks />
                    </motion.div>
                    <div className="text-center">
                        <motion.h1
                            variants={itemVariants}
                            className="my-6 text-4xl xl:text-7xl font-bold text-white drop-shadow-md"
                        >
                            Quem somos
                        </motion.h1>
                        <motion.h2
                            variants={itemVariants}
                            className="text-xl font-medium text-white/90 mb-10 max-w-xl mx-auto leading-relaxed"
                        >
                            Uma rede de cuidado e acolhimento que valoriza a dignidade, o respeito e a vida em todas as suas fases.
                        </motion.h2>
                        
                        <motion.button
                            variants={itemVariants}
                            onClick={scrollToContent}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/30"
                        >
                            Conheça mais <FaChevronDown className="text-sm" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
