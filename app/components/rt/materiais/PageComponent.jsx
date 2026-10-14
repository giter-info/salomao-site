"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/app/images/layout/logo-rt.png";
import MateriaisGridComponent from "@/app/components/rt/materiais/GridComponent";
import { FaChevronDown } from "react-icons/fa";

export default function MateriaisPageComponent() {
    const scrollToContent = () => {
        const contentSection = document.getElementById("materiais-content");
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: "smooth" });
        }
    };

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

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20 bg-brand-green">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 -z-10"
                >
                    <Image
                        src="/bg-rt.webp"
                        alt="Background"
                        fill
                        priority
                        className="object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/95 via-brand-green/90 to-brand-green-dark/95" />
                </motion.div>

                <div className="container mx-auto px-4 z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="w-40 md:w-56 h-auto mx-auto"
                                priority
                            />
                        </motion.div>
                        
                        <motion.h2
                            variants={itemVariants}
                            className="font-serif text-4xl md:text-6xl font-bold text-brand-gold mb-10 drop-shadow-sm"
                        >
                            Materiais Úteis
                        </motion.h2>

                        <motion.button
                            variants={itemVariants}
                            onClick={scrollToContent}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-gold/10 border border-brand-gold/40 text-brand-gold backdrop-blur-sm px-8 py-4 rounded-full font-bold transition-all hover:bg-brand-gold/20 inline-flex items-center gap-2"
                        >
                            Ver materiais <FaChevronDown className="text-sm" />
                        </motion.button>
                    </motion.div>
                </div>
                
                <div className="absolute inset-0 opacity-10 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>
            </section>

            {/* Content Section */}
            <section id="materiais-content" className="py-24 bg-brand-offwhite dark:bg-brand-green-dark scroll-mt-20">
                <div className="container mx-auto px-4">
                    <MateriaisGridComponent />
                </div>
            </section>
        </>
    );
}