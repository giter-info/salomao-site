"use client";
import { motion } from "framer-motion";
import {
    FaHome,
    FaUserCheck,
    FaUsers,
    FaHeart,
    FaWhatsapp,
    FaWheelchair,
    FaUserShield,
    FaFileAlt,
    FaClipboardList,
    FaCalendarCheck,
    FaLink,
    FaBullseye,
    FaDoorOpen,
    FaUser,
    FaCheck,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaInstagram
} from "react-icons/fa";

export default function ApresentacaoRiClient() {
    const objetivos = [
        {
            title: "Moradia Digna",
            description: "Ambiente residencial adaptado e acolhedor, seguindo rigorosamente as normas de acessibilidade (NBR 9050).",
            icon: FaHome,
            color: "text-ri-bluest",
            bg: "bg-ri-bluest/10 border-ri-bluest/20"
        },
        {
            title: "Autonomia",
            description: "Desenvolvimento de habilidades para a vida diária e participação ativa nas decisões da casa.",
            icon: FaUserCheck,
            color: "text-ri-blue",
            bg: "bg-ri-blue/10 border-ri-blue/20"
        },
        {
            title: "Inclusão",
            description: "Participação ativa na vida comunitária com articulação com Saúde (SUS) e Educação.",
            icon: FaUsers,
            color: "text-ri-soft-green",
            bg: "bg-ri-soft-green/10 border-ri-soft-green/20"
        },
        {
            title: "Vínculos",
            description: "Fortalecimento dos laços familiares e sociais com foco constante em evitar a desinstitucionalização.",
            icon: FaHeart,
            color: "text-red-400",
            bg: "bg-red-400/10 border-red-400/20"
        }
    ];

    const steps = [
        { step: "01", title: "Plano de Atendimento Singular (PAS)", desc: "Avaliação inicial e monitoramento contínuo das necessidades e potencialidades de cada residente." },
        { step: "02", title: "Projeto Terapêutico Singular (PTS)", desc: "Desenvolvido a partir do PAS, de forma colaborativa com o residente, respeitando seus desejos e potencialidades." },
        { step: "03", title: "Avaliações Periódicas", desc: "Revisão periódica para avaliar progresso, ajustar estratégias e celebrar conquistas na reabilitação." }
    ];

    const diretrizes = [
        { title: "Protagonismo", desc: "O residente participa ativamente das decisões da casa.", icon: FaBullseye },
        { title: "Intersetorialidade", desc: "Articulação forte e contínua com Saúde (SUS) e Educação.", icon: FaLink },
        { title: "Desinstitucionalização", desc: "Foco em evitar que a residência inclusiva se torne um \"depósito\".", icon: FaDoorOpen }
    ];

    const beneficiosResidente = [
        "Moradia segura e digna após alta hospitalar ou desintoxicação",
        "Acompanhamento multiprofissional integrado entre CAPS-AD e Residencial",
        "Desenvolvimento de autonomia com habilidades para vida independente",
        "Reabilitação psicossocial focada em reinserção comunitária",
        "Protagonismo nas decisões sobre sua trajetória de recuperação"
    ];

    const beneficiosFamilia = [
        "Tranquilidade sabendo que seu familiar está em um ambiente seguro e acolhedor",
        "Fortalecimento de vínculos através de atendimento familiar integrado",
        "Participação ativa no processo de reabilitação e planejamento do futuro",
        "Esperança de uma vida digna e comunitária para seu familiar"
    ];

    return (
        <section className="relative min-h-screen bg-ri-primary text-white pt-28 pb-20 flex flex-col justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" style={{ backgroundImage: "url('/bg-ri.png')" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#004148]/95 to-slate-950" />
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
                        className="text-ri-blue text-lg sm:text-xl font-medium tracking-wide"
                    >
                        Residencial Inclusivo Salomão — "Respeitando o normal de cada um"
                    </motion.p>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-24 h-1 bg-ri-blue rounded-full mx-auto mt-6 origin-center"
                    />
                </div>

                {/* Badges e Resumo da Proposta */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl mx-auto py-6"
                >
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {["Moradia Digna", "Autonomia", "Inclusão", "Vínculos"].map((badge, idx) => (
                            <span
                                key={idx}
                                className="px-5 py-2 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-ri-blue/10 text-ri-blue border border-ri-blue/25 rounded-full shadow-lg backdrop-blur-md hover:bg-ri-blue hover:text-white hover:border-ri-blue transition-all duration-300 cursor-default"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-200 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl px-4">
                        A Residência Inclusiva é o compromisso do Estado brasileiro com a proteção integral de jovens e adultos com deficiência. Reafirmamos que a deficiência não é barreira para uma vida plena e comunitária.
                    </p>
                </motion.div>

                {/* 1. O Serviço de Residência Inclusiva */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full hover:border-ri-blue/30 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        O Serviço de Residência Inclusiva (RI)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base md:col-span-7">
                            A Residência Inclusiva (RI) Salomão é uma unidade de acolhimento institucional que funciona 24 horas por dia, inserida na comunidade. Destinada a jovens e adultos com deficiência (18 a 59 anos) em situação de dependência, oferecemos um ambiente residencial adaptado, acolhedor e seguro.
                        </p>
                        <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-ri-blue italic text-sm md:text-base text-slate-200 md:col-span-5">
                            "Nossa missão é garantir moradia digna, desenvolvimento de autonomia, participação ativa na vida comunitária e fortalecimento dos laços familiares e sociais. Cada residente é protagonista das decisões da casa, com atendimento multiprofissional e personalizado."
                        </div>
                    </div>
                </motion.div>

                {/* 2. Articulação com CAPS-AD */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full hover:border-ri-blue/30 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        Articulação com CAPS-AD: Uma Parceria Estratégica
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-7 space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                            <p>
                                O Residencial Inclusivo Salomão trabalha em estreita articulação com o <strong>CAPS-AD (Centro de Atenção Psicossocial - Álcool e Drogas)</strong> de Blumenau, formando uma rede integrada de cuidado que transforma vidas e fortalece a comunidade.
                            </p>
                            <p>
                                Esta articulação é fundamental para garantir a continuidade do cuidado a pessoas com deficiência e transtornos decorrentes do uso de substâncias, rompendo o ciclo de desinstitucionalização inadequada.
                            </p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-ri-bluest italic text-sm md:text-base text-slate-200 md:col-span-5">
                            "Juntos, CAPS-AD e Residencial Inclusivo Salomão oferecem um caminho estruturado de reabilitação psicossocial que respeita a dignidade, promove a autonomia e reconecta o indivíduo com a sociedade."
                        </div>
                    </div>
                </motion.div>

                {/* 3. Benefícios e Impacto Social */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Benefícios para o Residente */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 hover:border-ri-blue/30 transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold text-ri-bluest flex items-center gap-2 border-b border-white/10 pb-3">
                            <FaUser /> Benefícios para o Residente
                        </h3>
                        <ul className="space-y-3">
                            {beneficiosResidente.map((beneficio, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                    <FaCheck className="text-ri-bluest mt-1 shrink-0" size={14} />
                                    <span>{beneficio}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Benefícios para a Família */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 hover:border-ri-blue/30 transition-all duration-300"
                    >
                        <h3 className="text-xl font-bold text-ri-blue flex items-center gap-2 border-b border-white/10 pb-3">
                            <FaUsers /> Benefícios para a Família
                        </h3>
                        <ul className="space-y-3">
                            {beneficiosFamilia.map((beneficio, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                    <FaCheck className="text-ri-blue mt-1 shrink-0" size={14} />
                                    <span>{beneficio}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Impacto Social callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.55 }}
                    className="bg-ri-blue/10 border border-ri-blue/20 p-6 rounded-2xl shadow-xl text-center space-y-3"
                >
                    <h4 className="text-lg font-bold text-ri-blue">Impacto Social</h4>
                    <p className="text-slate-200 text-sm md:text-base font-light leading-relaxed max-w-4xl mx-auto">
                        Esta parceria contribui para reduzir reinternações hospitalares, fortalecer a RAPS (Rede de Atenção Psicossocial) e demonstrar que a desinstitucionalização é possível e eficaz. Cada residente que se reabilita é uma vitória para a comunidade, um exemplo de que a deficiência não é barreira para uma vida plena e comunitária.
                    </p>
                </motion.div>

                {/* 4. Objetivos Principais */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full hover:border-ri-blue/30 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        Objetivos Principais
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {objetivos.map((obj, i) => {
                            const Icon = obj.icon;
                            return (
                                <div key={i} className="flex flex-col gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 items-start justify-between min-h-[190px] hover:bg-white/10 transition-colors duration-300">
                                    <div className={`p-3 rounded-xl ${obj.bg} ${obj.color} shrink-0`}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white mb-2">{obj.title}</h4>
                                        <p className="text-xs text-slate-300 leading-relaxed">{obj.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* 5. Estrutura Física & Equipe de Referência */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Casa (Espaço Físico) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.65 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 hover:border-ri-blue/30 transition-all duration-300"
                    >
                        <div className="border-b border-white/10 pb-3">
                            <h3 className="text-xl font-bold text-white">Casa (Espaço Físico)</h3>
                            <p className="text-slate-400 text-xs mt-1">Ambiente adaptado para convivência e segurança</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 items-center">
                                <div className="p-3 rounded-xl bg-ri-blue/10 text-ri-blue shrink-0">
                                    <FaHome size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">Capacidade</h4>
                                    <p className="text-xs text-slate-300">Máximo de 10 residentes por unidade.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 items-center">
                                <div className="p-3 rounded-xl bg-ri-bluest/10 text-ri-bluest shrink-0">
                                    <FaWheelchair size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">Acessibilidade Total</h4>
                                    <p className="text-xs text-slate-300">Rampas, barras de apoio e rotas livres seguindo a NBR 9050.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 items-center">
                                <div className="p-3 rounded-xl bg-ri-soft-green/10 text-ri-soft-green shrink-0">
                                    <FaUserShield size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">Privacidade</h4>
                                    <p className="text-xs text-slate-300">Quartos configurados para no máximo 2 ou 3 pessoas.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Equipe de Referência */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.65 }}
                        className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 hover:border-ri-blue/30 transition-all duration-300"
                    >
                        <div className="border-b border-white/10 pb-3">
                            <h3 className="text-xl font-bold text-white">Equipe de Referência</h3>
                            <p className="text-slate-400 text-xs mt-1">Acompanhamento multiprofissional contínuo</p>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                            O cuidado é multiprofissional e personalizado, com profissionais fixos por turno para fortalecer o vínculo e a confiança com os residentes.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <h4 className="font-bold text-xs text-ri-bluest">Coordenação</h4>
                                <p className="text-[10px] text-slate-400 mt-1">Gestão técnica e administrativa da unidade.</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <h4 className="font-bold text-xs text-ri-blue">Técnicos</h4>
                                <p className="text-[10px] text-slate-400 mt-1">Assistente Social e Psicólogo (nível superior).</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <h4 className="font-bold text-xs text-ri-soft-green">Cuidadores</h4>
                                <p className="text-[10px] text-slate-400 mt-1">Atendimento direto e cuidados diários (escala 24h).</p>
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <h4 className="font-bold text-xs text-slate-200">Auxiliares</h4>
                                <p className="text-[10px] text-slate-400 mt-1">Suporte nas atividades domésticas e cuidados básicos.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 6. Plano de Atendimento Personalizado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full hover:border-ri-blue/30 transition-all duration-300"
                >
                    <div className="border-b border-white/10 pb-3">
                        <h2 className="text-2xl font-bold text-white tracking-wide">Plano de Atendimento Personalizado</h2>
                        <p className="text-slate-400 text-sm mt-1">Estrutura metodológica para desenvolvimento individual</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {steps.map((item, i) => {
                            const iconMap = [FaFileAlt, FaClipboardList, FaCalendarCheck];
                            const StepIcon = iconMap[i];
                            return (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 items-start hover:bg-white/10 transition-colors duration-300">
                                    <div className="text-xl font-black text-ri-blue bg-ri-blue/20 border border-ri-blue/20 w-12 h-12 rounded-xl flex flex-col items-center justify-center shrink-0">
                                        <StepIcon size={18} className="mb-0.5 text-ri-bluest" />
                                        <span className="text-[10px] -mt-1 leading-none">{item.step}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* 7. Diretrizes 2026 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.75 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full hover:border-ri-blue/30 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        Diretrizes de Atuação
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {diretrizes.map((dir, i) => {
                            const DirIcon = dir.icon;
                            return (
                                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-start">
                                    <div className="p-3 rounded-xl bg-ri-bluest/10 text-ri-bluest shrink-0">
                                        <DirIcon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-white mb-1">{dir.title}</h4>
                                        <p className="text-xs text-slate-300 leading-relaxed">{dir.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* 8. Contato, Localização & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 w-full hover:border-ri-blue/30 transition-all duration-300"
                >
                    <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                        Contato e Localização
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between min-h-[140px] md:col-span-8">
                            <div className="space-y-3">
                                <h4 className="font-bold text-ri-blue text-base flex items-center gap-2">
                                    <FaMapMarkerAlt /> Blumenau / SC
                                </h4>
                                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                                    Rua Guilherme Lueders, 285 - Bairro Tribess (CEP 89055-470)
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4 text-xs md:text-sm text-slate-400 font-semibold">
                                <span className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-ri-bluest" /> (47) 99960-4301
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-ri-bluest" /> (47) 99225-4397
                                </span>
                            </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-center items-center text-center min-h-[140px] md:col-span-4">
                            <FaInstagram className="text-ri-bluest mb-3 text-3xl" />
                            <h4 className="font-bold text-white text-sm">Siga no Instagram</h4>
                            <a
                                href="https://www.instagram.com/inclusiva.salomao/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-ri-blue hover:underline mt-2 block font-semibold"
                            >
                                @inclusiva.salomao
                            </a>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-col items-center gap-3">
                        <a
                            href="https://api.whatsapp.com/send?phone=5547988080041&text=Olá,%20gostaria%20de%20conversar%20sobre%20a%20proposta%20técnica%20da%20Residência%20Inclusiva."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:max-w-md bg-ri-blue text-slate-950 font-bold py-4 rounded-2xl hover:bg-ri-bluest transition-all shadow-lg hover:shadow-ri-blue/20 flex items-center justify-center gap-2 text-base"
                        >
                            Falar com a Equipe no WhatsApp <FaWhatsapp size={20} />
                        </a>
                        <p className="text-slate-400 text-xs tracking-wider uppercase font-semibold">
                            Juntos somos mais fortes!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
