"use client";
import {useState} from "react";
import * as motion from "framer-motion/client";
import {FaArrowRight, FaChartLine, FaBullhorn, FaSearch, FaUsers, FaWhatsapp} from "react-icons/fa";
import {buildWhatsappUrl} from "@/app/config/whatsapp.config";
import {EVENTS, trackEvent} from "@/app/config/analytics.config";

const AGENDAR_URL = buildWhatsappUrl("Gostaria de agendar uma reunião sobre marketing.");

const SOLUCOES = [
    {icon: FaSearch, titulo: "Estratégia & Posicionamento", texto: "Diagnóstico, posicionamento de marca e plano de crescimento alinhado ao seu momento de mercado."},
    {icon: FaBullhorn, titulo: "Autoridade & Conteúdo", texto: "Conteúdo institucional, reputação digital e presença consistente para consolidar autoridade no setor."},
    {icon: FaChartLine, titulo: "Performance & Resultados", texto: "Campanhas orientadas a métricas, funis de conversão e acompanhamento contínuo de resultados."},
    {icon: FaUsers, titulo: "Expansão de Mercado", texto: "Aquisição de clientes, captação de oportunidades e suporte à expansão comercial da sua empresa."},
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.15, delayChildren: 0.1}},
};

const itemVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y: 0, transition: {duration: 0.7, ease: "easeOut"}},
};

export default function MarketingClient() {
    const [form, setForm] = useState({nome: "", empresa: "", email: "", telefone: "", mensagem: ""});
    const [status, setStatus] = useState("idle");
    const [errors, setErrors] = useState({});

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrors({});
        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
            });
            const result = await response.json();

            if (!response.ok || !result.ok) {
                setErrors(result.errors || {});
                setStatus("error");
                return;
            }

            window.open(result.whatsappUrl, "_blank", "noopener");
            trackEvent(EVENTS.leadSubmit, {form: "marketing-salomao", empresa: form.empresa});
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    };

    const inputClass =
        "w-full rounded-xl border border-slate-200 dark:border-brand-gold/20 bg-white dark:bg-brand-green-dark px-4 py-3 text-sm text-brand-ink dark:text-brand-offwhite placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold transition-all";

    return (
        <main id="conteudo" className="bg-brand-offwhite">
            {/* Hero B2B */}
            <section className="bg-brand-green pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"/>
                </div>
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="inline-block text-brand-gold font-bold uppercase tracking-[0.25em] text-sm mb-5"
                        >
                            Marketing Salomão
                        </motion.span>
                        <motion.h1
                            variants={itemVariants}
                            className="font-serif text-4xl sm:text-6xl text-white leading-tight mb-6"
                        >
                            Potencialize sua empresa com marketing corporativo
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-brand-offwhite/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
                            Estratégias de marketing corporativo focadas em resultados, autoridade e expansão de
                            mercado. Soluções personalizadas para o setor B2B.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mt-10">
                            <a
                                href="#form-lead"
                                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green font-bold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-lg"
                            >
                                Solicitar proposta <FaArrowRight/>
                            </a>
                            <a
                                href={AGENDAR_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-brand-gold/60 text-brand-gold font-bold px-8 py-4 rounded-full hover:bg-brand-gold/10 transition-all duration-300"
                            >
                                <FaWhatsapp/> Agendar reunião
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Soluções */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">Soluções B2B</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-green mt-3">
                            Do diagnóstico à expansão
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SOLUCOES.map(({icon: Icon, titulo, texto}, idx) => (
                            <motion.div
                                key={idx}
                                initial={{opacity: 0, y: 40}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-60px"}}
                                transition={{duration: 0.6, delay: idx * 0.1}}
                                whileHover={{y: -8}}
                                className="bg-white dark:bg-brand-green-dark rounded-3xl p-7 border border-slate-200 dark:border-brand-gold/20 shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green dark:bg-brand-gold/15 dark:text-brand-gold-light flex items-center justify-center mb-5 text-xl">
                                    <Icon/>
                                </div>
                                <h3 className="font-serif text-lg text-brand-green mb-2">{titulo}</h3>
                                <p className="text-brand-ink/70 text-sm leading-relaxed">{texto}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coesão de marca */}
            <section className="bg-brand-green py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Coesão de marca</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-white mt-3 mb-5">
                        A mesma arquitetura da Rede, com tom corporativo
                    </h2>
                    <p className="text-brand-offwhite/80 text-lg leading-relaxed">
                        A Marketing Salomão fala a língua da Rede Salomão — estrutura, confiança e propósito — mas com
                        identidade, mensagem e ritmo próprios do universo B2B.
                    </p>
                </div>
            </section>

            {/* Formulário de captura de leads */}
            <section id="form-lead" className="py-24 scroll-mt-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10">
                        <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-sm">Captura de Leads</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-green mt-3 mb-4">
                            Vamos conversar sobre sua empresa?
                        </h2>
                        <p className="text-brand-ink/70">
                            Preencha os dados e nosso time entra em contato — ou fale agora pelo WhatsApp.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white dark:bg-brand-green-dark rounded-3xl border border-slate-200 dark:border-brand-gold/20 shadow-sm p-8 space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <label className="block">
                                <span className="text-sm font-semibold text-brand-green">Nome*</span>
                                <input
                                    name="nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    required
                                    autoComplete="name"
                                    className={inputClass}
                                    placeholder="Seu nome"
                                />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-brand-green">Empresa*</span>
                                <input
                                    name="empresa"
                                    value={form.empresa}
                                    onChange={handleChange}
                                    required
                                    autoComplete="organization"
                                    className={inputClass}
                                    placeholder="Nome da empresa"
                                />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-brand-green">E-mail*</span>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="email"
                                    className={inputClass}
                                    placeholder="voce@empresa.com"
                                />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-brand-green">Telefone*</span>
                                <input
                                    name="telefone"
                                    value={form.telefone}
                                    onChange={handleChange}
                                    required
                                    autoComplete="tel"
                                    className={inputClass}
                                    placeholder="(47) 99999-9999"
                                />
                            </label>
                        </div>

                        <label className="block">
                            <span className="text-sm font-semibold text-brand-green">Como podemos ajudar?</span>
                            <textarea
                                name="mensagem"
                                value={form.mensagem}
                                onChange={handleChange}
                                rows={4}
                                className={inputClass}
                                placeholder="Conte brevemente seu desafio de marketing"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full bg-brand-gold text-brand-green font-bold py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Enviando..." : "Enviar pelo WhatsApp"} <FaArrowRight/>
                        </button>

                        {errors.nome && <p className="text-center text-sm text-red-600" role="alert">{errors.nome}</p>}
                        {errors.empresa && <p className="text-center text-sm text-red-600" role="alert">{errors.empresa}</p>}
                        {errors.email && <p className="text-center text-sm text-red-600" role="alert">{errors.email}</p>}
                        {errors.telefone && <p className="text-center text-sm text-red-600" role="alert">{errors.telefone}</p>}
                        {status === "error" && !Object.keys(errors).length && (
                            <p className="text-center text-sm text-red-600" role="alert">
                                Não foi possível processar agora. Tente novamente ou fale pelo WhatsApp.
                            </p>
                        )}

                        {status === "sent" && (
                            <p className="text-center text-sm text-brand-green font-semibold" role="status">
                                Dados preparados — conclua o envio no WhatsApp que foi aberto.
                            </p>
                        )}
                    </form>
                </div>
            </section>
        </main>
    );
}
