"use client";
import {useTransition, useState} from "react";
import {useRouter} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";
import brand from "@/app/images/layout/brand.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter();
    const [isLoading, startTransition] = useTransition();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (url) => {
        // Usa `startTransition` para gerenciar a transição da rota
        startTransition(() => {
            router.push(url); // Navega para a nova rota
            setIsMobileMenuOpen(false)
        });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const links = [
        { nome: "Início", link: "/" },
        { nome: "Sobre Nós", link: "/residencial-terapeutico/#sobre" },
        { nome: "Doenças Atendidas", link: "/residencial-terapeutico/doencas" },
        { nome: "Estrutura", link: "/residencial-terapeutico/estrutura" },
        { nome: "Dúvidas Frequentes", link: "/residencial-terapeutico/faq" },
        { nome: "Contato", link: "/#contato" }
    ];

    const NormalLinks = () => {
        return (
            links.map((link, index) => (
                <div
                    key={index}
                    className="py-2 px-3 block hover:text-rt-primary cursor-pointer font-cardo font-semibold"
                    onClick={() => handleNavigation(link.link)} // Navega para a rota clicada
                >
                    {link.nome}
                </div>
            ))
        );
    };

    const MobileLinks = () => {
        return (
            links.map((link, index) => (
                <div
                    key={index}
                    className="text-2xl hover:text-rt-primary cursor-pointer font-cardo font-semibold"
                    onClick={() => handleNavigation(link.link)} // Navega para a rota clicada
                >
                    {link.nome}
                </div>
            ))
        );
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-rt-green text-rt-white fixed w-full top-0 left-0 z-50 hover:shadow-lg hover:shadow-rt-primary">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link href="/" className="text-white">
                            <Image src={brand} alt="Brand Logo" width="120" priority/>
                        </Link>
                        <button id="mobile-menu-button" className="md:hidden" onClick={toggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>bars-3-bottom-left</title>
                                <path
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div id="nav-menu" className="hidden md:flex space-x-4">
                        <NormalLinks />
                    </div>
                </div>

                {/* Animação do Menu Mobile */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-rt-green text-white flex flex-col items-center justify-center space-y-6"
                        >
                            <button id="mobile-menu-close" className="absolute top-4 right-4" onClick={() => setIsMobileMenuOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <title>close</title>
                                    <path
                                        d="M6 18L18 6M6 6l12 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <MobileLinks />
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Loading Spinner */}
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                </div>
            )}
        </>
    );
}
