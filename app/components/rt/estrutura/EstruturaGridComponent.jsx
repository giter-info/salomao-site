"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageLightbox from "@/app/components/shared/ImageLightbox";

export default function EstruturaGridComponent({ images = [], theme = {} }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const handleImageClick = (index) => {
        setSelectedIndex(index);
        setIsOpen(true);
    };

    const hoverBorderClass = theme.textAccent === 'text-rt-primary'
        ? 'hover:border-rt-primary/50'
        : theme.textAccent === 'text-ri-blue'
        ? 'hover:border-ri-blue/50'
        : 'hover:border-white/50';

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-4 gap-6">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="break-inside-avoid mb-6 cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleImageClick(index)}
                        id={`gallery-item-${index}`}
                    >
                        <Image
                            className={`rounded-2xl shadow-md ${theme.shadowAccent || 'shadow-rt-dark'} border border-white/10 ${hoverBorderClass} transition-colors duration-300 w-full h-auto`}
                            src={image.src}
                            alt={image.alt || `Imagem ${index + 1}`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </motion.div>
                ))}
            </div>

            <ImageLightbox
                images={images}
                initialIndex={selectedIndex}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
