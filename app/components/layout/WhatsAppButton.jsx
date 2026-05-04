"use client";
import {useState, useEffect} from "react";
import * as motion from "framer-motion/client";
import {FaWhatsapp} from "react-icons/fa";

export default function WhatsAppButton() {
    const [scrollCount, setScrollCount] = useState(0);
    const [showBalloon, setShowBalloon] = useState(false);
    const [balloonClosed, setBalloonClosed] = useState(false); // Estado para controlar o fechamento
    const whatsLink = "https://api.whatsapp.com/send?phone=5547988688790&text=Ol%C3%A1,%20gostaria%20de%20atendimento%20e%20informa%C3%A7%C3%B5es.";

    useEffect(() => {
        const handleScroll = () => {
            // Aumenta o contador de rolagem a cada rolagem
            setScrollCount(prevCount => prevCount + 1);
        };

        // Adiciona o evento de rolagem
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Remove o evento de rolagem quando o componente é desmontado
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Exibe o balão de diálogo na segunda rolagem e se ele não tiver sido fechado
        if (scrollCount >= 40 && !balloonClosed) {
            setShowBalloon(true);
        }
    }, [scrollCount, balloonClosed]);

    const closeBalloon = () => {
        setShowBalloon(false);
        setBalloonClosed(true); // Marca o balão como fechado
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-6 left-6 z-50 flex flex-col items-start"
        >
            {/* Balão de diálogo */}
            {showBalloon && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="mb-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 relative"
                >
                    <div className="flex justify-between items-start gap-4">
                        <a
                            href={whatsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <p className="text-rt-green font-bold text-sm">Olá! 👋</p>
                            <p className="text-gray-600 text-xs mt-1">Como podemos ajudar hoje?</p>
                        </a>
                        <button
                            onClick={closeBalloon}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                    {/* Seta do balão */}
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white/90 backdrop-blur-md border-r border-b border-white/20 rotate-45"></div>
                </motion.div>
            )}

            {/* Botão do WhatsApp */}
            <motion.a
                href={whatsLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    boxShadow: [
                        "0 0 0 0px rgba(34, 197, 94, 0.4)",
                        "0 0 0 15px rgba(34, 197, 94, 0)"
                    ]
                }}
                transition={{
                    boxShadow: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="flex items-center gap-2 py-3 px-5 rounded-full shadow-2xl bg-green-500 text-white transition-all duration-300"
            >
                <FaWhatsapp size={24} />
                <span className="font-bold text-sm tracking-wide">Contato</span>
            </motion.a>
        </motion.div>
    );
}
