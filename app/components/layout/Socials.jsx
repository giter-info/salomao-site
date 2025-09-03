import * as motion from "framer-motion/client";
import {FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";

export default function Socials() {
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
                    href={"https://www.instagram.com/residencial.salomao/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.2, rotate: 10}}
                    whileTap={{scale: 0.9}}
                    className=" hover:text-rt-info"
                >

                    <FaInstagram size={42}/>
                </motion.a>
                <motion.a
                    href="https://www.facebook.com/profile.php?id=61565632582956"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.2, rotate: -10}}
                    className=" hover:text-rt-info"
                    whileTap={{scale: 0.9}}
                >
                    <FaFacebook size={42}/>
                </motion.a>
                <motion.a
                    href="mailto:contato@redesalomao.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.2, rotate: 10}}
                    whileTap={{scale: 0.9}}
                    className=" hover:text-rt-info"
                >
                    <FaEnvelope size={42}/>
                </motion.a>
                <motion.a
                    href="https://api.whatsapp.com/send?phone=5547988080041&text=Entrei%20em%20contato%20pelo%20novo%20site.%20"
                    target="_blank"
                    whileHover={{scale: 1.2, rotate: -10}}
                    whileTap={{scale: 0.9}}
                    className=" hover:text-rt-info"
                >
                    <FaWhatsapp size={42}/>
                </motion.a>
            </motion.div>

            {/* Texto com animação de fade-in */}
            <motion.p
                className="text-blueGray-info mx-auto text-left mt-5  pb-4"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.4}}
            >
                Rua Pedro Léo Menscheim, n. 210<br/>
                CEP 89117-805<br/>
                Belchior Alto - Gaspar - Santa Catarina<br/>
            </motion.p>
        </div>
    )
}