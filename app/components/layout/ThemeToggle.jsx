"use client";
import {useEffect, useState} from "react";
import {FaSun, FaMoon} from "react-icons/fa";

export default function ThemeToggle({className = ""}) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const initial = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
    };

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
            aria-pressed={isDark}
            title={isDark ? "Tema claro" : "Tema escuro"}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold/40 text-brand-offwhite hover:text-brand-gold hover:border-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/60 ${className}`}
        >
            {isDark ? <FaSun size={16}/> : <FaMoon size={16}/>}
        </button>
    );
}
