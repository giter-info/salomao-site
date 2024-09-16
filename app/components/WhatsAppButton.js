import * as motion from "framer-motion/client";

import {FaWhatsapp} from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
        >
            <a
                href="https://api.whatsapp.com/send?phone=5547999604301&text=Entrei%20em%20contato%20pelo%20novo%20site.%20Gostaria%20de%20conversar%20sobre%20o%20residencial."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed flex items-center justify-center py-1 px-2 rounded-t-full rounded-bl-full shadow-lg bg-green-500
                transition-all duration-300 bottom-0 left-5 z-50 shadow-rt-green border border-rt-info text-rt-info"
                style={{transform: "translateY(-50%)"}}
            >
                <FaWhatsapp fill="#bdf2d8" size={26} className="mx-1"/>
                <span className="font-light text-sm">Contato</span>
            </a>
        </motion.div>
    );
};

