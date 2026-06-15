"use client";
import {useTransition, useState} from "react";
import {useRouter} from "next/navigation";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SharedNavbar({ config }) {
    const { navbar, theme } = config;
    const router = useRouter();
    const [isLoading, startTransition] = useTransition();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (url) => {
        startTransition(() => {
            router.push(url);
            setIsMobileMenuOpen(false);
        });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const NormalLinks = () => {
        return (
            navbar.links.map((link, index) => (
                <div
                    key={index}
                    className={`py-2 px-3 block ${theme.textMenu} hover:${theme.textAccent} cursor-pointer font-cardo font-semibold`}
                    onClick={() => handleNavigation(link.link)}
                >
                    {link.nome}
                </div>
            ))
        );
    };

    const MobileLinks = () => {
        return (
            navbar.links.map((link, index) => (
                <div
                    key={index}
                    className={`text-2xl hover:${theme.textAccent} cursor-pointer font-cardo font-semibold`}
                    onClick={() => handleNavigation(link.link)}
                >
                    {link.nome}
                </div>
            ))
        );
    };

    const navBgClass = theme.navbarBg || theme.primaryBg;
    const isDarkBg = navBgClass.includes('dark') || navBgClass.includes('gray') || navBgClass.includes('green') || navBgClass.includes('primary');

    return (
        <>
            <nav className={`${navBgClass} ${theme.textPrimary} fixed w-full top-0 left-0 z-50 border-b ${isDarkBg ? 'border-white/10' : 'border-black/5'} shadow-md transition-all duration-300`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link href="/" className={`${isDarkBg ? 'brightness-110' : 'brightness-100'} transition-all`}>
                            <Image src={navbar.logo} alt="Brand Logo" width="120" priority/>
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

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className={`fixed inset-0 ${theme.mobileMenuBg || navBgClass} ${theme.textAccent} flex flex-col items-center justify-center space-y-6`}
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

            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                </div>
            )}
        </>
    );
}
