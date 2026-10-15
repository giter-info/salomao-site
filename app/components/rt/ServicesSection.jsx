"use client";
import { motion } from "framer-motion";
import { FaUserCheck, FaUsers, FaStethoscope } from "react-icons/fa";

export default function ServicesSection() {
    const services = [
        {
            icon: FaUserCheck,
            title: "Atendimento Individualizado",
            description: "O cuidado começa desde o momento da admissão, onde realizamos uma avaliação completa para entender o histórico, o diagnóstico, as condições atuais e os objetivos de cada residente."
        },
        {
            icon: FaUsers,
            title: "Autogestão e Gestão Comunitária",
            description: "Incentivamos a participação ativa dos moradores na construção do seu plano de cuidados. Acreditamos que a autonomia e a autoexpressão são fundamentais, dando voz nas decisões pessoais e comunitárias."
        },
        {
            icon: FaStethoscope,
            title: "Acompanhamento Continuado",
            description: "O atendimento individualizado no Residencial Salomão é um compromisso com a dignidade, respeito e eficácia, garantindo que cada morador se sinta de fato acolhido em seu lar."
        }
    ];

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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="servicos" className="py-20 bg-brand-offwhite dark:bg-brand-green-dark scroll-mt-12 overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.h2
                    className="font-serif text-4xl md:text-5xl font-bold text-brand-green dark:text-brand-offwhite text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Nossos Serviços
                </motion.h2>
                
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="group surface-card p-8 flex flex-col items-center text-center h-full"
                            >
                                <div className="p-4 rounded-2xl bg-brand-green/10 dark:bg-brand-gold/15 text-brand-green dark:text-brand-gold-light w-fit mb-6 flex items-center justify-center transition-colors duration-300">
                                    <Icon size={32} className="transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-brand-green dark:text-brand-offwhite leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-brand-ink/75 dark:text-brand-offwhite/80 leading-relaxed text-sm md:text-base">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
