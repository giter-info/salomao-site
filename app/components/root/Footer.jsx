"use client";
import {useRouter} from "next/navigation";
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import Image from "next/image";
import logoLight from "@/app/images/layout/logo-rede-light.webp";
import {buildWhatsappUrl} from "@/app/config/whatsapp.config";

const WHATSAPP_URL = buildWhatsappUrl();

const SOCIALS = [
    {icon: FaInstagram, href: "https://www.instagram.com/residencial.salomao/", label: "Instagram"},
    {icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61565632582956", label: "Facebook"},
    {icon: FaWhatsapp, href: WHATSAPP_URL, label: "WhatsApp"},
];

const UNIDADES = [
    {nome: "Blumenau", link: "/residencial-terapeutico/unidades"},
    {nome: "Chapecó", link: "/residencial-terapeutico/unidades"},
    {nome: "Santa Catarina", link: "/residencial-terapeutico/unidades"},
];

const LINKS_UTEIS = [
    {nome: "Sobre Nós", link: "/sobre"},
    {nome: "Residencial Terapêutico", link: "/residencial-terapeutico"},
    {nome: "Residência Inclusiva", link: "/residencia-inclusiva"},
    {nome: "Contato", link: "/contato"},
    {nome: "Marketing Salomão", link: "/marketing-salomao"},
];

const SERVICOS = [
    {nome: "Residencial Terapêutico", link: "/residencial-terapeutico"},
    {nome: "Residência Inclusiva", link: "/residencia-inclusiva"},
    {nome: "Marketing Salomão", link: "/marketing-salomao"},
    {nome: "Captura de Leads", link: "/marketing-salomao"},
    {nome: "Dúvidas Frequentes", link: "/residencial-terapeutico/faq"},
];

export default function Footer() {
    const router = useRouter();

    const go = (link) => () => router.push(link);

    const Column = ({title, items}) => (
        <div className="w-full lg:w-auto">
            <span className="block uppercase text-brand-green dark:text-brand-gold text-xs font-semibold tracking-wider mb-4">{title}</span>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i}>
                        <div
                            role="link"
                            tabIndex={0}
                            onClick={go(item.link)}
                            onKeyDown={(e) => e.key === "Enter" && go(item.link)()}
                            className="text-brand-ink/70 dark:text-brand-offwhite/85 hover:text-brand-green dark:hover:text-brand-gold text-sm font-medium cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/60 rounded"
                        >
                            {item.nome}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer id="footer" className="relative bg-brand-offwhite dark:bg-brand-green pt-12 pb-6 border-t border-brand-green/10 dark:border-brand-gold/25">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <Image src="/brand-menu.png" alt="Rede Salomão" width={180} height={70} className="h-10 w-auto mb-4 dark:hidden"/>
                        <Image src={logoLight} alt="Rede Salomão" height={44} className="hidden dark:block h-11 w-auto mb-4"/>
                        <p className="text-brand-ink/70 dark:text-brand-offwhite/80 text-sm leading-relaxed">
                            Respeitando o normal de cada um. Cuidado, inclusão e acolhimento em Blumenau e Chapecó.
                        </p>
                        <div className="flex gap-4 mt-5">
                            {SOCIALS.map(({icon: Icon, href, label}, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-brand-green/70 dark:text-brand-offwhite/70 hover:text-brand-gold text-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold/60 rounded"
                                >
                                    <Icon/>
                                </a>
                            ))}
                        </div>
                    </div>

                    <Column title="Unidades" items={UNIDADES}/>
                    <Column title="Links Úteis" items={LINKS_UTEIS}/>
                    <Column title="Serviços" items={SERVICOS}/>
                </div>

                <hr className="my-8 border-brand-green/10 dark:border-brand-gold/25"/>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-brand-ink/60 dark:text-brand-offwhite/70 text-xs text-center md:text-left">
                        Copyright © {new Date().getFullYear()} Rede Salomão — Blumenau | Chapecó | Santa Catarina.
                    </p>
                    <div className="flex gap-5">
                        {SOCIALS.map(({icon: Icon, href, label}, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-brand-green/70 dark:text-brand-offwhite/70 hover:text-brand-gold text-xl transition-colors"
                            >
                                <Icon/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
