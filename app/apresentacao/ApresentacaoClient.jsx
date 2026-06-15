"use client";
import { motion } from "framer-motion";
import { Stethoscope, UserCheck, Users, Scale, MessageCircle } from "lucide-react";

export default function ApresentacaoClient() {
    const eixos = [
        {
            title: "Eixo Clínico-Terapêutico",
            description: "Acompanhamento multiprofissional contínuo, gestão responsável da medicação e cuidado integral à saúde física e mental.",
            icon: Stethoscope,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10 border-emerald-500/20"
        },
        {
            title: "Eixo de Autonomia",
            description: "Desenvolvimento de habilidades essenciais para a vida cotidiana, autocuidado, organização pessoal e gestão de recursos.",
            icon: UserCheck,
            color: "text-teal-400",
            bg: "bg-teal-500/10 border-teal-500/20"
        },
        {
            title: "Eixo de Sociabilidade e Lazer",
            description: "Participação em atividades comunitárias, recreativas e culturais, combatendo o isolamento e promovendo novas relações.",
            icon: Users,
            color: "text-indigo-400",
            bg: "bg-indigo-500/10 border-indigo-500/20"
        },
        {
            title: "Eixo de Cidadania",
            description: "Regularização de documentos, acesso a benefícios sociais e exercício pleno dos direitos civis para a reinserção social.",
            icon: Scale,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10 border-cyan-500/20"
        }
    ];

    const steps = [
        { step: "01", title: "Plano de Atendimento Singular (PAS)", desc: "Monitoramento clínico constante com foco na prevenção e tratamento de condições de saúde." },
        { step: "02", title: "Projeto Terapêutico Singular (PTS)", desc: "Desenvolvido de forma colaborativa com o residente, respeitando seus desejos e potencialidades." },
        { step: "03", title: "Avaliações Mensais", desc: "Revisão periódica para avaliar o progresso, ajustar estratégias e celebrar conquistas na reabilitação." }
    ];

    return (
        <section className="relative min-h-screen bg-slate-900 text-white pt-28 pb-20 flex flex-col justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('/bg-root.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950" />
            </div>

            <div className="container mx-auto px-4 z-10 w-full max-w-6xl space-y-12">
                {/* Header */}
                <div className="text-center mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4"
                    >
                        Proposta Técnica
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-rt-primary text-lg sm:text-xl font-medium tracking-wide"
                    >
                        Eixos de cuidado e plano de reabilitação do Residencial Terapêutico Salomão.
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-rt-primary rounded-full mx-auto mt-6 origin-center"
                    />
                </div>

                {/* 1. O Serviço de Residência Terapêutica (SRT) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        O Serviço de Residência Terapêutica (SRT)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base md:col-span-7">
                            O Serviço de Residência Terapêutica (SRT) Salomão é um componente estratégico da RAPS (Rede de Atenção Psicossocial), trabalhando em articulação com o CAPS-II. Nosso propósito é acolher indivíduos com transtornos mentais que, após longos períodos de internação, buscam um novo caminho para a desinstitucionalização e a reinserção na sociedade.
                        </p>
                        <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-rt-primary italic text-sm md:text-base text-rt-info md:col-span-5">
                            "Nosso compromisso vai além do cuidado; é com a equipe de projetos de vida e o fortalecimento da cidadania. Atendemos pessoas acompanhadas pelos CAPS, egressos de hospitais psiquiátricos e indivíduos provenientes de Hospitais de Custódia e Tratamento Psiquiátrico."
                        </div>
                    </div>
                </motion.div>

                {/* 2. Eixos de Cuidado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        Eixos de Cuidado
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {eixos.map((eixo, i) => {
                            const Icon = eixo.icon;
                            return (
                                <div key={i} className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 items-start justify-between min-h-[180px]">
                                    <div className={`p-3 rounded-xl ${eixo.bg} ${eixo.color} shrink-0`}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white mb-2">{eixo.title}</h4>
                                        <p className="text-xs text-slate-300 leading-relaxed">{eixo.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* 3. Plano de Reabilitação */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full"
                >
                    <div className="border-b border-white/10 pb-3">
                        <h2 className="text-2xl font-bold text-white tracking-wide">Plano de Reabilitação</h2>
                        <p className="text-slate-400 text-sm mt-1">Jornada de 12 Meses para Reinserção Social</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 items-start">
                                <div className="text-xl md:text-2xl font-black text-rt-primary bg-rt-green/30 border border-rt-primary/20 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 4. Unidades & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        Unidades de Acolhimento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between min-h-[120px]">
                            <div>
                                <h4 className="font-bold text-rt-primary text-base">Unidade Blumenau</h4>
                                <p className="text-xs md:text-sm text-slate-300 mt-2">Rua Dr. Pedro Zimmermann, 2391 - Itoupavazinha (CEP 89066-000)</p>
                            </div>
                            <a href="tel:47999604301" className="text-sm text-rt-info hover:underline mt-4 block font-semibold">(47) 99960-4301</a>
                        </div>
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between min-h-[120px]">
                            <div>
                                <h4 className="font-bold text-rt-primary text-base">Unidade Chapecó</h4>
                                <p className="text-xs md:text-sm text-slate-300 mt-2">Rua Ponoe Schefer, 114 E - Centro (CEP 89812-160)</p>
                            </div>
                            <a href="tel:47992254397" className="text-sm text-rt-info hover:underline mt-4 block font-semibold">(47) 99225-4397</a>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-center">
                        <a
                            href="https://api.whatsapp.com/send?phone=5547988080041&text=Olá,%20gostaria%20de%20conversar%20sobre%20a%20proposta%20técnica%20do%20residencial."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:max-w-md bg-rt-primary text-slate-950 font-bold py-4 rounded-2xl hover:bg-rt-info transition-all shadow-lg hover:shadow-rt-primary/20 flex items-center justify-center gap-2 text-base"
                        >
                            Falar com a Equipe no WhatsApp <MessageCircle size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
