"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import RedeIconLinks from "@/app/components/layout/RedeIconLinks";

export default function HomeSection() {

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

    return (
        <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 -z-10"
            >
                <Image
                    src="/bg-root.png"
                    alt="Rede Salomão - Juntos somos mais fortes"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
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
                            className="text-3xl xl:text-7xl font-bold text-white drop-shadow-md"
                        >
                            Juntos somos
                        </motion.h1>
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl xl:text-7xl font-bold text-white mb-6 drop-shadow-md"
                        >
                            mais fortes!
                        </motion.h1>
                        <motion.h2
                            variants={itemVariants}
                            className="text-xl font-medium text-white/90 mb-8 max-w-xl mx-auto leading-relaxed"
                        >
                            Bem-vindo à Rede Salomão, criada para oferecer serviços acolhedores, inclusivos e qualificados.
                        </motion.h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}