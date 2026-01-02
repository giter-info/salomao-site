"use client";
import {useState, useEffect} from "react";
import * as motion from "framer-motion/client";
import {FaWhatsapp} from "react-icons/fa";

export default function WhatsAppButton() {
    const [scrollCount, setScrollCount] = useState(0);
    const [showBalloon, setShowBalloon] = useState(false);
    const [balloonClosed, setBalloonClosed] = useState(false); // Estado para controlar o fechamento
    const whatsLink = "https://api.whatsapp.com/send?phone=5547991117705&text=Ol%C3%A1,%20gostaria%20de%20atendimento%20e%20informa%C3%A7%C3%B5es.";

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
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
        >
            {/* Balão de diálogo */}
            {showBalloon && (
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="fixed bottom-16 left-5 bg-white p-3 rounded-t-xl rounded-br-xl shadow-lg z-50 pl-12"
                >
                    <div className="flex justify-between items-center">
                        <a
                            href={whatsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-gray-800 ">Posso ajudar?</p>
                            <p className="text-gray-800 ">Qualquer dúvida clique aqui.</p>
                        </a>
                        <button
                            onClick={closeBalloon}
                            className="ml-4 hover:bg-red-600 hover:text-rt-green border-2 border-red-600 text-red-600 rounded-full px-1.5"
                        >
                            &times;
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Botão do WhatsApp */}
            <a
                href={whatsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed flex items-center justify-center py-1 px-2 rounded-t-full rounded-bl-full shadow-lg bg-green-500
                transition-all duration-300 bottom-0 left-5 z-50 shadow-rt-green border border-rt-info text-rt-info
                hover:shadow-[2px_2px_15px_2px] hover:shadow-amber-200"
                style={{transform: "translateY(-50%)"}}
            >
                <FaWhatsapp fill="#bdf2d8" size={26} className="mx-1"/>
                <span className="font-light text-sm">Contato</span>
            </a>
        </motion.div>
    );
}
