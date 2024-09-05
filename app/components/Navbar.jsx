"use client"
import { useEffect, useState } from "react";
import brand from "@/app/images/brand.png"
import Image from "next/image";
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleDocumentClick = (event) => {
            const dropdownToggle = document.getElementById("dropdown-toggle");
            const dropdownMenu = document.getElementById("dropdown-menu");
            const mobileDropdownToggle = document.getElementById("mobile-dropdown-toggle");
            const mobileDropdownMenu = document.getElementById("mobile-dropdown-menu");

            if (
                dropdownMenu &&
                !dropdownToggle?.contains(event.target) &&
            !dropdownMenu.contains(event.target)
        ) {
                setIsDropdownOpen(false);
            }

            if (
                mobileDropdownMenu &&
                !mobileDropdownToggle?.contains(event.target) &&
            !mobileDropdownMenu.contains(event.target)
        ) {
                setIsMobileDropdownOpen(false);
            }

            if (
                !document.getElementById("mobile-menu-button")?.contains(event.target) &&
            !document.getElementById("mobile-menu")?.contains(event.target)
        ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleDropdownMenu = (event) => {
        event.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileDropdownMenu = (event) => {
        event.stopPropagation();
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
    };

    return (
        <nav className="bg-rt-green text-rt-white fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#" className="text-white">
                        <Image src={brand} alt="Brand Logo" width="190" />
                    </a>
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
                    <a href="#" className="py-2 px-3 block hover:text-rt-primary">Início</a>
                    <a href="#sobre" className="py-2 px-3 block hover:text-rt-primary">Sobre Nós</a>
                    <div className="relative">
                        <button
                            id="dropdown-toggle"
                            className="py-2 px-3 hover:bg-gray-700 flex items-center gap-2"
                            onClick={toggleDropdownMenu}
                        >
                            <span>Serviços</span>
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <title>chevron-down</title>
                                <path
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <div
                            id="dropdown-menu"
                            className={`absolute ${isDropdownOpen ? "block" : "hidden"} bg-rt-primary text-rt-dark w-48 mt-2 rounded-lg`}
                        >
                            <a href="#servicos" className="block px-4 py-2 hover:bg-rt-info">Residência Terapêutica</a>
                            <a href="#servicos" className="block px-4 py-2 hover:bg-rt-info">Atendimento
                                Individualizado</a>
                            <a href="#servicos" className="block px-4 py-2 hover:bg-rt-info">Acompanhamento</a>
                        </div>
                    </div>
                    <a href="#posts" className="block px-4 py-2 hover:bg-rt-info">Blog Digital</a>
                    <a href="#contato" className="py-2 px-3 block hover:text-rt-primary">Contato</a>
                </div>
            </div>
            <div
                id="mobile-menu"
                className={`fixed inset-0 bg-rt-green text-white ${isMobileMenuOpen ? "flex" : "hidden"} flex-col items-center justify-center space-y-6`}
            >
                <button id="mobile-menu-close" className="absolute top-4 right-4" onClick={closeMobileMenu}>
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

                <a href="#" className="text-xl hover:text-rt-primary" onClick={closeMobileMenu}>
                    Início
                </a>
                <a href="#sobre" className="text-xl hover:text-rt-primary" onClick={closeMobileMenu}>
                    Sobre Nós
                </a>
                <div className="relative">
                    <button
                        id="mobile-dropdown-toggle"
                        className="text-xl hover:text-rt-primary flex items-center gap-2"
                        onClick={toggleMobileDropdownMenu}
                    >
                        <span>Serviços</span>
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>chevron-down</title>
                            <path
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </button>
                    <div
                        id="mobile-dropdown-menu"
                        className={`absolute ${isMobileDropdownOpen ? "block" : "hidden"} bg-rt-primary text-rt-dark mt-2 rounded-lg`}
                    >
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Residência Terapêutica</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Atendimento Individualizado</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Acompanhamento</a>
                    </div>
                </div>
                <a href="#contato" className="text-xl hover:text-rt-primary" onClick={closeMobileMenu}>
                    Contato
                </a>
            </div>
        </nav>
    );
}
