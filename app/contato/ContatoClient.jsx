"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { contactsConfig } from "@/app/config/contacts.config";

export default function ContatoClient() {
    return (
        <section className="relative min-h-screen bg-slate-900 text-white pt-28 pb-20 flex flex-col justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('/bg-root.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950" />
            </div>

            <div className="container mx-auto px-4 z-10 w-full max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4"
                    >
                        Contato
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-rt-primary text-lg sm:text-xl font-medium tracking-wide"
                    >
                        Estamos aqui para ajudar. Fale conosco por e-mail, telefone ou visite uma de nossas unidades.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-rt-primary rounded-full mx-auto mt-6 origin-center"
                    />
                </div>
                {/* Cards Column */}
                <div className="lg:col-span-7 space-y-8 w-full">
                    <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl font-bold text-white tracking-wide"
                    >
                        Nossos Canais de Atendimento
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {contactsConfig.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between"
                            >
                                <div>
                                    <h4 className="text-rt-primary font-bold text-lg mb-4 tracking-wide uppercase">
                                        {c.service}
                                    </h4>
                                    <ul className="space-y-4 text-sm text-slate-300">
                                        <li className="flex items-center gap-3">
                                            <FaWhatsapp className="text-green-400 shrink-0 text-lg" />
                                            <a
                                                href={`https://api.whatsapp.com/send?phone=${c.phoneRaw}&text=${encodeURIComponent(c.whatsMsg)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white hover:underline transition-colors"
                                            >
                                                {c.phone}
                                            </a>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaEnvelope className="text-rt-primary shrink-0 text-base" />
                                            <a
                                                href={`mailto:${c.email}`}
                                                className="hover:text-white hover:underline transition-colors break-all"
                                            >
                                                {c.email}
                                            </a>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaMapMarkerAlt className="text-slate-400 shrink-0 text-base mt-0.5" />
                                            <span>{c.address}</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
