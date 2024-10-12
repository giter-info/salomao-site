"use client";
import * as motion from "framer-motion/client";
import {FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {useRouter} from "next/navigation";

export default function Footer() {
    const router = useRouter();

    const links = [
        {nome: "Início", link: "/",},
        {nome: "Sobre Nós", link: "/#sobre",},
        {nome: "Doenças Atendidas", link: "/doencas",},
        {nome: "Imagens", link: "/estrutura",},
        {nome: "Contato", link: "/#contato",},
    ];

    const FooterLinks = () => {
        return (
            <ul className="list-unstyled pb-4">
                {links.map((link, index) => (
                    <li key={index}>
                        <motion.a
                            onClick={() => router.push(link.link)}
                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
                            whileHover={{scale: 1.1}}
                        >
                            {link.nome}
                        </motion.a>
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <footer id="contato" className="relative bg-rt-green pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
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
                                href="https://www.instagram.com/residencial.salomao/"
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

                    {/* Outra metade do footer */}
                    <div className="w-full lg:w-6/12 xl:px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Mapa do Site
                                </span>
                                <FooterLinks/>
                            </div>
                            {/* Mais links */}
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Informações Adicionais
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <motion.a
                                            href="#"
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            whileHover={{scale: 1.1}}
                                        >
                                            Dúvidas Frequentes
                                        </motion.a>
                                    </li>

                                    <li>
                                        <motion.a
                                            href=""
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            whileHover={{scale: 1.1}}
                                        >
                                            Materiais Úteis
                                        </motion.a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-blueGray-300"/>

                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <motion.div
                            className="text-sm text-blueGray-500 font-semibold py-1"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.6}}
                        >
                            Copyright © {new Date().getFullYear()}{" "}
                            <a
                                href="https://www.instagram.com/je4npw"
                                className="text-blueGray-500 hover:text-blueGray-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Desenvolvido por Je4nPw
                            </a>
                            .
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
