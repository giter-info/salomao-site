"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import logoLight from "@/app/images/layout/logo-rede-light.webp";
import SharedSocials from "@/app/components/shared/SharedSocials";
import Signature from "@/app/components/layout/Signature";

export default function SharedFooter({config}) {
    const {footer} = config;
    const router = useRouter();

    const FooterLinks = () => (
        <ul className="list-unstyled pb-4">
            {footer.links.map((link, index) => (
                <li key={index} className="overflow-hidden">
                    <motion.a
                        onClick={() => router.push(link.link)}
                        className="text-brand-ink/70 dark:text-brand-offwhite/80 hover:text-brand-green dark:hover:text-brand-gold transition-colors font-medium block pb-2 text-sm cursor-pointer"
                        whileHover={{x: 5}}
                    >
                        {link.nome}
                    </motion.a>
                </li>
            ))}
        </ul>
    );

    return (
        <footer id="contato" className="relative bg-brand-offwhite dark:bg-brand-green pt-16 pb-8 border-t border-brand-green/10 dark:border-brand-gold/25">
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    <Image src="/brand-menu.png" alt="Rede Salomão" width={180} height={70} className="h-10 w-auto dark:hidden"/>
                    <Image src={logoLight} alt="Rede Salomão" height={44} className="hidden dark:block h-11 w-auto"/>
                </div>
                <div className="flex flex-wrap text-left lg:text-left gap-y-10">
                    <SharedSocials config={config}/>

                    <div className="w-full lg:w-6/12 xl:px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-brand-green dark:text-brand-gold text-xs font-bold mb-4 tracking-widest">
                                    Mapa do Site
                                </span>
                                <FooterLinks/>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-brand-green dark:text-brand-gold text-xs font-bold mb-4 tracking-widest">
                                    Informações Adicionais
                                </span>
                                <ul className="list-unstyled">
                                    {footer.additionalLinks.map((link, index) => (
                                        <li key={index} className="overflow-hidden">
                                            <motion.div
                                                onClick={() => router.push(link.link)}
                                                className="text-brand-ink/70 dark:text-brand-offwhite/80 hover:text-brand-green dark:hover:text-brand-gold transition-colors font-medium block pb-2 text-sm cursor-pointer"
                                                whileHover={{x: 5}}
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

                <hr className="my-10 border-brand-green/10 dark:border-brand-gold/25"/>

                <Signature/>
            </div>
        </footer>
    );
}
