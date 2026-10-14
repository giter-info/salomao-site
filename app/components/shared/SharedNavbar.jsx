"use client";
import {useTransition, useState} from "react";
import {useRouter} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import {FaWhatsapp} from "react-icons/fa";
import logoLight from "@/app/images/layout/logo-rede-light.webp";
import ThemeToggle from "@/app/components/layout/ThemeToggle";
import {buildWhatsappUrl} from "@/app/config/whatsapp.config";

export default function SharedNavbar({config}) {
    const {navbar, socials} = config;
    const router = useRouter();
    const [isLoading, startTransition] = useTransition();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const whatsappUrl = buildWhatsappUrl(socials?.whatsappMessage, socials?.whatsapp);

    const handleNavigation = (url) => {
        startTransition(() => {
            router.push(url);
            setIsMobileMenuOpen(false);
        });
    };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const NormalLinks = () =>
        navbar.links.map((link, index) => (
            <a
                key={index}
                href={link.link}
                className="py-2 px-2 block text-brand-green/90 dark:text-brand-offwhite/90 hover:text-brand-gold cursor-pointer font-sans font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/60 rounded"
                onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.link);
                }}
            >
                {link.nome}
            </a>
        ));

    const MobileLinks = () =>
        navbar.links.map((link, index) => (
            <a
                key={index}
                href={link.link}
                className="text-2xl text-brand-offwhite hover:text-brand-gold cursor-pointer font-serif font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/60 rounded"
                onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.link);
                }}
            >
                {link.nome}
            </a>
        ));

    return (
        <>
            <nav className="bg-brand-offwhite/95 dark:bg-brand-green text-brand-green dark:text-brand-offwhite fixed w-full top-0 left-0 z-50 border-b border-brand-green/10 dark:border-brand-gold/20 shadow-md backdrop-blur transition-all duration-300">
                <div className="container mx-auto px-4 flex justify-between items-center py-1">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a
                            href="/"
                            className="transition-all flex items-center gap-2"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation("/");
                            }}
                        >
                            <Image src="/brand-menu.png" alt="Rede Salomão" width={180} height={59} priority className="h-9 w-auto dark:hidden"/>
                            <Image src={logoLight} alt="Rede Salomão" height={44} priority className="hidden dark:block h-11 w-auto"/>
                        </a>
                        <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Abrir menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
                                <title>abrir menu</title>
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex space-x-1">
                            <NormalLinks/>
                        </div>
                        <ThemeToggle/>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand-gold text-brand-green font-bold text-sm px-5 py-2 rounded-full shadow-md hover:bg-brand-gold-light transition-all duration-300"
                        >
                            <FaWhatsapp className="text-brand-green" size={16}/> WhatsApp
                        </a>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -50}}
                        transition={{duration: 0.3}}
                        className="fixed inset-0 z-50 overflow-y-auto bg-brand-green-dark/85 backdrop-blur-xl text-brand-offwhite"
                    >
                        <button
                            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-brand-offwhite/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Fechar menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                                <title>fechar menu</title>
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <div className="min-h-full flex flex-col items-center justify-center gap-6 px-6 py-24">
                            <Image src={logoLight} alt="Rede Salomão" height={48} className="h-12 w-auto mb-2"/>
                            <MobileLinks/>
                            <ThemeToggle className="mt-2"/>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green font-bold px-6 py-3 rounded-full shadow-md hover:bg-brand-gold-light transition-all duration-300"
                            >
                                <FaWhatsapp/> Falar no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                </div>
            )}
        </>
    );
}
