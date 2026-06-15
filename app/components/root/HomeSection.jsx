"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import logort from "@/app/images/layout/logo-rt.png";
import logori from "@/app/images/layout/logo-ri.png";
import logodog from "@/app/images/layout/logo-dog.png";
import { FaArrowRight } from "react-icons/fa";

export default function HomeSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const services = [
        {
            title: "Residencial Terapêutico",
            desc: "Acolhimento seguro, afetuoso e especializado para pessoas com transtornos mentais egressas de internações psiquiátricas.",
            logo: logort,
            link: "/residencial-terapeutico",
            bgColor: "bg-rt-green/90",
            borderColor: "border-rt-primary/30",
            hoverShadow: "hover:shadow-rt-primary/20",
            btnText: "Ver Residencial",
            themeColor: "text-rt-primary",
            bgImage: "/bg-rt.png"
        },
        {
            title: "Residência Inclusiva",
            desc: "Acolhimento humanizado para pessoas com deficiência, promovendo autonomia, bem-estar e plena cidadania.",
            logo: logori,
            link: "/residencia-inclusiva",
            bgColor: "bg-ri-primary/90",
            borderColor: "border-ri-blue/30",
            hoverShadow: "hover:shadow-ri-blue/20",
            btnText: "Ver Residência",
            themeColor: "text-ri-blue",
            bgImage: "/bg-ri.png"
        },
        {
            title: "Adestramento Salomão",
            desc: "Centro de treinamento comportamental para cães, proporcionando qualidade de vida e harmonia entre pets e tutores.",
            logo: logodog,
            link: "/adestramento-salomao",
            bgColor: "bg-as-gray/90",
            borderColor: "border-white/20",
            hoverShadow: "hover:shadow-white/10",
            btnText: "Ver Adestramento",
            themeColor: "text-white",
            bgImage: "/bg-as.png"
        }
    ];

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 bg-slate-900">
            {/* Background image default */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/bg-root.png"
                    alt="Rede Salomão"
                    fill
                    priority
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950" />
            </div>

            <div className="container mx-auto px-4 z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-6xl mx-auto flex flex-col items-center"
                >
                    {/* Header */}
                    <div className="text-center mb-16 max-w-3xl">
                        <motion.h1
                            variants={itemVariants}
                            id="portal-main-heading"
                            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-4"
                        >
                            Rede Salomão
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-rt-primary text-lg sm:text-xl font-medium mb-6 tracking-wide"
                        >
                            Juntos somos mais fortes!
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                        >
                            Bem-vindo ao nosso portal. Oferecemos serviços especializados de saúde mental, inclusão social de pessoas com deficiência e adestramento de excelência.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <motion.div 
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`relative group rounded-3xl overflow-hidden border ${service.borderColor} ${service.bgColor} backdrop-blur-md shadow-lg ${service.hoverShadow} flex flex-col min-h-[380px] transition-shadow duration-300`}
                            >
                                {/* Soft background image overlay on hover */}
                                <div className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                                    <Image
                                        src={service.bgImage}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow items-center text-center">
                                    {/* Logo Container */}
                                    <div className="relative h-28 w-full mb-6 flex items-center justify-center">
                                        <Image
                                            src={service.logo}
                                            alt={service.title}
                                            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                            sizes="200px"
                                            priority
                                        />
                                    </div>

                                    {/* Content */}
                                    <h2 className="text-xl font-bold text-white mb-3 tracking-wide">{service.title}</h2>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>

                                    {/* Action Button */}
                                    <Link href={service.link} className="w-full mt-auto" id={`btn-portal-${idx}`}>
                                        <div className={`flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-bold text-sm tracking-wider uppercase border border-white/15 bg-white/5 hover:bg-white text-white hover:text-slate-950 transition-all duration-300`}>
                                            {service.btnText}
                                            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}