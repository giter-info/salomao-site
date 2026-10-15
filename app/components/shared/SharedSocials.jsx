import * as motion from "framer-motion/client";
import {FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {buildWhatsappUrl} from "@/app/config/whatsapp.config";

export default function SharedSocials({config}) {
    const {socials} = config;

    const linkClass = "text-brand-green/70 dark:text-brand-offwhite/70 hover:text-brand-gold transition-colors";

    return (
        <div className="w-full lg:w-6/12 px-4">
            <motion.h4
                className="font-serif text-3xl text-brand-green dark:text-brand-offwhite mb-2"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.1}}
            >
                Siga-nos em nossas redes sociais!
            </motion.h4>
            <motion.div
                className="flex flex-row gap-5 mt-6 lg:mb-0 mb-6"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.3}}
            >
                <motion.a href={socials.instagram} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.2, rotate: 10}} whileTap={{scale: 0.9}} className={linkClass}>
                    <FaInstagram size={40}/>
                </motion.a>
                <motion.a href={socials.facebook} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.2, rotate: -10}} whileTap={{scale: 0.9}} className={linkClass}>
                    <FaFacebook size={40}/>
                </motion.a>
                <motion.a href={`mailto:${socials.email}`} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.2, rotate: 10}} whileTap={{scale: 0.9}} className={linkClass}>
                    <FaEnvelope size={40}/>
                </motion.a>
                <motion.a href={buildWhatsappUrl(socials.whatsappMessage, socials.whatsapp)} target="_blank" rel="noopener noreferrer" whileHover={{scale: 1.2, rotate: -10}} whileTap={{scale: 0.9}} className={linkClass}>
                    <FaWhatsapp size={40}/>
                </motion.a>
            </motion.div>

            <motion.p
                className="text-brand-ink/70 dark:text-brand-offwhite/75 mx-auto text-left mt-5 pb-4 text-sm"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.4}}
            >
                {socials.address.map((line, index) => (
                    <span key={index}>
                        {line}<br/>
                    </span>
                ))}
            </motion.p>
        </div>
    );
}
