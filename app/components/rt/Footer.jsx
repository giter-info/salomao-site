"use client";
import * as motion from "framer-motion/client";
import {useRouter} from "next/navigation";
import Socials from "@/app/components/layout/Socials";
import Signature from "@/app/components/layout/Signature";

export default function Footer() {
    const router = useRouter();

    const links = [
        {nome: "Início", link: "/",},
        {nome: "Sobre Nós", link: "/residencial-inclusivo/#sobre",},
        {nome: "Doenças Atendidas", link: "/residencial-inclusivo/doencas",},
        {nome: "Imagens", link: "/residencial-inclusivo/estrutura",},
        {nome: "Contato", link: "/residencial-inclusivo/#contato",},
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
                    <Socials />

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
                                        <motion.div
                                            onClick = {() =>(router.push("/residencial-inclusivo"))}
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
                                            whileHover={{scale: 1.1}}
                                        >
                                            Residencial Inclusivo
                                        </motion.div>
                                    </li>
                                    <li>
                                        <motion.div
                                            onClick = {() =>(router.push("/residencial-inclusivo/faq"))}
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
                                            whileHover={{scale: 1.1}}
                                        >
                                            Dúvidas Frequentes
                                        </motion.div>
                                    </li>

                                    <li>
                                        <motion.div
                                            onClick = {() =>(router.push("/residencial-inclusivo/materiais"))}
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer"
                                            whileHover={{scale: 1.1}}
                                        >
                                            Materiais Úteis
                                        </motion.div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-blueGray-300"/>

                <Signature />
            </div>
        </footer>
    );
}
