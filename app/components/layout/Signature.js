import * as motion from "framer-motion/client";

export default function Signature() {
    return (
        <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <motion.div
                    className="text-sm text-blueGray-500 font-semibold py-1"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.6}}
                >
                    Copyright © {new Date().getFullYear()}{" "}
                    <a
                        href="https://www.instagram.com/je4npw"
                        className="text-blueGray-500 hover:text-blueGray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Desenvolvido por Je4nPw
                    </a>
                    .
                </motion.div>
            </div>
        </div>
    )
}