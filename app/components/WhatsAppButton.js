"use client";
import {useState, useEffect} from "react";
import * as motion from "framer-motion/client";
import {FaWhatsapp} from "react-icons/fa";

export default function WhatsAppButton() {
    const [scrollCount, setScrollCount] = useState(0);
    const [showBalloon, setShowBalloon] = useState(false);

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
        // Exibe o balão de diálogo na segunda rolagem
        if (scrollCount >= 2) {
            setShowBalloon(true);
        }
    }, [scrollCount]);

    const closeBalloon = () => {
        setShowBalloon(false);
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
                    className="fixed bottom-16 left-5 bg-white p-3 rounded-lg shadow-lg z-50"
                >
                    <div className="flex justify-between items-center">
                        <a
                            href="https://api.whatsapp.com/send?phone=5547988080041&text=Entrei%20em%20contato%20pelo%20novo%20site.%20Gostaria%20de%20conversar%20sobre%20o%20residencial."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-gray-800 text-sm">Estou aqui para ajudar se precisar!</p>
                        </a>
                        <button
                            onClick={closeBalloon}
                            className="ml-4 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Botão do WhatsApp */}
            <a
                href="https://api.whatsapp.com/send?phone=5547988080041&text=Entrei%20em%20contato%20pelo%20novo%20site.%20Gostaria%20de%20conversar%20sobre%20o%20residencial."
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
