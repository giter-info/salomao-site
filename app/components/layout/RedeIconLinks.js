import * as motion from "framer-motion/client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logort from "@/app/images/layout/logo-rt.png";
import logori from "@/app/images/layout/logo-ri.png";
import logodog from "@/app/images/layout/logo-dog.png";

export default function RedeIconLinks() {
    const pathname = usePathname();
    const isRoot = pathname === "/";

    const Tooltip = () => isRoot ? (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-rt-dark text-white text-[10px] md:text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-white/10 z-20">
            Clique para conhecer mais
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-rt-dark rotate-45 border-l border-t border-white/10"></div>
        </div>
    ) : null;

    return (
        <div className="sm:mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
            <div className="relative group px-1 py-1 text-sm leading-6">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <Link href="/residencial-terapeutico">
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="relative"
                        >
                            <Image
                                src={logort}
                                alt="Logo RT"
                                className="w-28 md:w-40 xl:w-48 h-auto mx-auto"
                                sizes="(max-width: 768px) 112px, (max-width: 1280px) 160px, 192px"
                                priority
                            />
                        </motion.button>
                    </Link>
                </motion.div>
                <Tooltip />
            </div>
            <div className="relative group px-1 py-1 text-sm leading-6">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <Link href={"/residencia-inclusiva"}>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="relative"
                        >
                            <Image
                                src={logori}
                                alt="Logo RI"
                                className="w-28 md:w-40 xl:w-48 h-auto mx-auto"
                                sizes="(max-width: 768px) 112px, (max-width: 1280px) 160px, 192px"
                                priority
                            />
                        </motion.button>
                    </Link>
                </motion.div>
                <Tooltip />
            </div>
            <div className="relative group px-1 py-1 text-sm leading-6">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <Link href={"/adestramento-salomao"}>
                        <motion.button
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="relative"
                        >
                            <Image
                                src={logodog}
                                alt="Logo Adestramento"
                                className="w-28 md:w-40 xl:w-48 h-auto mx-auto"
                                sizes="(max-width: 768px) 112px, (max-width: 1280px) 160px, 192px"
                                priority
                            />
                        </motion.button>
                    </Link>
                </motion.div>
                <Tooltip />
            </div>
        </div>
    );
}