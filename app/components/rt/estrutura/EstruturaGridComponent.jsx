"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";

export default function EstruturaGridComponent({ images = [], theme = {} }) {
    if (!images || images.length === 0) return null;

    return (
        <div className="columns-1 md:columns-2 lg:columns-4">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="px-2"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                >
                    <Image
                        className={`mb-8 rounded-lg shadow-lg ${theme.shadowAccent || 'shadow-rt-dark'} border-2 ${theme.textAccent === 'text-rt-primary' ? 'border-rt-primary' : 'border-white'}`}
                        src={image.src}
                        alt={image.alt || `Imagem ${index + 1}`}
                    />
                </motion.div>
            ))}
        </div>
    );
}
