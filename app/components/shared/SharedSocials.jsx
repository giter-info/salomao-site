import * as motion from "framer-motion/client";
import {FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";

export default function SharedSocials({ config }) {
    const { socials, theme } = config;

    return (
        <div className="w-full lg:w-6/12 px-4">
            <motion.h4
                className="text-3xl font-semibold text-blueGray-700"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.1}}
            >
                Siga-nos em nossas redes sociais!
            </motion.h4>
            <motion.div
                className="flex flex-row gap-3 mt-6 lg:mb-0 mb-6 space-x-2"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.3}}
            >
                <motion.a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.2, rotate: 10}}
                    whileTap={{scale: 0.9}}
                    className={`hover:${theme.textAccent}`}
                >
                    <FaInstagram size={42}/>
                </motion.a>
                <motion.a
                    href={socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.2, rotate: -10}}
                    className={`hover:${theme.textAccent}`}
                    whileTap={{scale: 0.9}}
                >
                    <FaFacebook size={42}/>
                </motion.a>
                <motion.a
                    href={`mailto:${socials.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.2, rotate: 10}}
                    whileTap={{scale: 0.9}}
                    className={`hover:${theme.textAccent}`}
                >
                    <FaEnvelope size={42}/>
                </motion.a>
                <motion.a
                    href={`https://api.whatsapp.com/send?phone=${socials.whatsapp}&text=${encodeURIComponent(socials.whatsappMessage)}`}
                    target="_blank"
                    whileHover={{scale: 1.2, rotate: -10}}
                    whileTap={{scale: 0.9}}
                    className={`hover:${theme.textAccent}`}
                >
                    <FaWhatsapp size={42}/>
                </motion.a>
            </motion.div>

            <motion.p
                className="text-blueGray-info mx-auto text-left mt-5  pb-4"
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
    )
}
