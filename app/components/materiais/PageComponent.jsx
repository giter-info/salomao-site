"use client"
import * as motion from "framer-motion/client";
import Image from "next/image";
import logo from "@/app/images/layout/logo.png";
import MateriaisGridComponent from "@/app/components/materiais/GridComponent";

export default function MateriaisPageComponent() {
    return (
        <section id="saibamais" className="py-24 ">
            <div className="bg-rt-green">
                <div className="container mx-auto px-4 text-rt-green">
                    <div className="sm:mb-8 flex justify-center">
                        <div className="relative px-3 py-1 text-sm leading-6 text-gray-600">
                            <motion.div
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 1, ease: "easeOut"}}
                            >
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    className="w-40 md:w-48 xl-60 h-auto mx-auto"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.h2
                        className="text-6xl font-bold text-rt-info text-center mb-8 mt-16 font-script"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Materiais Úteis
                    </motion.h2>
                </div>
                <div className="container mx-auto px-4">
                    <MateriaisGridComponent />
                </div>
            </div>
        </section>
    );
}