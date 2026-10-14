"use client";
import Image from "next/image";
import * as motion from "framer-motion/client";
import {FaArrowRight, FaWhatsapp} from "react-icons/fa";
import {buildWhatsappUrl} from "@/app/config/whatsapp.config";

export default function SharedHomeSection({config}) {
    const {home, theme, socials} = config;

    const whatsappUrl = buildWhatsappUrl(socials?.whatsappMessage, socials?.whatsapp);

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {staggerChildren: 0.25, delayChildren: 0.15}},
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
    };

    return (
        <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden bg-brand-green pt-24 pb-16">
            {theme.homeBgImage && (
                <motion.div
                    initial={{scale: 1.1, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                    className="absolute inset-0 -z-10"
                >
                    <Image src={theme.homeBgImage} alt={home.titleLine1} fill priority className="object-cover opacity-25"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/95 via-brand-green/90 to-brand-green-dark/95"/>
                </motion.div>
            )}
            <div className="container mx-auto px-4 z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto max-w-3xl flex flex-col items-center text-center"
                >
                    <motion.div variants={itemVariants} className="mb-8">
                        <Image src={home.logo} alt="Logo" className="w-32 md:w-44 h-auto mx-auto" priority/>
                    </motion.div>
                    <motion.h1
                        variants={itemVariants}
                        className="font-serif text-4xl sm:text-5xl xl:text-7xl text-white leading-tight tracking-tight"
                    >
                        {home.titleLine1}
                    </motion.h1>
                    <motion.h1
                        variants={itemVariants}
                        className="font-serif text-4xl sm:text-5xl xl:text-7xl text-brand-gold leading-tight tracking-tight mb-6"
                    >
                        {home.titleLine2}
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-brand-offwhite/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                    >
                        {home.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mt-9">
                        <a
                            href="#sobre"
                            className="inline-flex items-center gap-2 bg-brand-gold text-brand-green font-bold px-7 py-3.5 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-lg"
                        >
                            Conhecer <FaArrowRight/>
                        </a>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border-2 border-brand-gold/60 text-brand-gold font-bold px-7 py-3.5 rounded-full hover:bg-brand-gold/10 transition-all duration-300"
                        >
                            <FaWhatsapp/> WhatsApp
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
