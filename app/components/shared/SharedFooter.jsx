"use client";
import * as motion from "framer-motion/client";
import {useRouter} from "next/navigation";
import SharedSocials from "@/app/components/shared/SharedSocials";
import Signature from "@/app/components/layout/Signature";

export default function SharedFooter({ config }) {
    const { footer, theme } = config;
    const router = useRouter();

    const FooterLinks = () => {
        return (
            <ul className="list-unstyled pb-4">
                {footer.links.map((link, index) => (
                    <li key={index} className="overflow-hidden">
                        <motion.a
                            onClick={() => router.push(link.link)}
                            className={`${theme.textPrimary} opacity-70 hover:opacity-100 transition-opacity font-medium block pb-2 text-sm cursor-pointer`}
                            whileHover={{ x: 5 }}
                        >
                            {link.nome}
                        </motion.a>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <footer id="contato" className={`relative ${theme.secondaryBg} pt-16 pb-8 border-t border-white/5`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left gap-y-10">
                    <SharedSocials config={config} />

                    <div className="w-full lg:w-6/12 xl:px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className={`block uppercase ${theme.textAccent} text-xs font-bold mb-4 tracking-widest`}>
                                    Mapa do Site
                                </span>
                                <FooterLinks/>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className={`block uppercase ${theme.textAccent} text-xs font-bold mb-4 tracking-widest`}>
                                    Informações Adicionais
                                </span>
                                <ul className="list-unstyled">
                                    {footer.additionalLinks.map((link, index) => (
                                        <li key={index} className="overflow-hidden">
                                            <motion.div
                                                onClick={() => router.push(link.link)}
                                                className={`${theme.textPrimary} opacity-70 hover:opacity-100 transition-opacity font-medium block pb-2 text-sm cursor-pointer`}
                                                whileHover={{ x: 5 }}
                                            >
                                                {link.nome}
                                            </motion.div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-white/10"/>

                <Signature />
            </div>
        </footer>
    );
}
