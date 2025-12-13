import * as motion from "framer-motion/client";
import Link from "next/link";
import Image from "next/image";
import logort from "@/app/images/layout/logo-rt.png";
import logori from "@/app/images/layout/logo-ri.png";
import logodog from "@/app/images/layout/logo-dog.png";

export default function RedeIconLinks() {
    return (
        <div className="sm:mb-8 flex justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <Link href="/residencial-terapeutico">
                        <motion.button
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <Image
                                src={logort}
                                alt="Logo"
                                className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                priority
                            />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <Link href={"/residencial-inclusivo"}>
                        <motion.button
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <Image
                                src={logori}
                                alt="Logo"
                                className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                priority
                            />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
            <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <Link href={"/adestramento-salomao"}>
                        <motion.button
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <Image
                                src={logodog}
                                alt="Logo"
                                className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                priority
                            />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}