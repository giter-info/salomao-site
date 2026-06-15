"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function ImageLightbox({ images = [], initialIndex = 0, isOpen = false, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Update index when lightbox is opened with a specific image
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    // Keyboard navigation handlers
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex, images]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!isOpen || images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-md z-[150] flex flex-col items-center justify-center"
                onClick={onClose}
            >
                {/* Header info */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white/70 z-[160] px-4 pointer-events-none">
                    <span className="text-sm font-semibold select-none">
                        {currentIndex + 1} / {images.length}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="pointer-events-auto text-white hover:text-rt-primary bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
                        title="Fechar (Esc)"
                        id="lightbox-close-btn"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                {/* Main Image Slider Area */}
                <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-6 z-[160] text-white hover:text-rt-primary bg-black/40 hover:bg-black/60 p-4 rounded-full transition-all duration-300 border border-white/5 shadow-lg"
                        title="Anterior (Seta Esquerda)"
                        id="lightbox-prev-btn"
                    >
                        <FaChevronLeft className="text-2xl" />
                    </button>

                    {/* Active Image Container */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative w-full h-full select-none"
                    >
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt || "Galeria da Estrutura"}
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                    </motion.div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-6 z-[160] text-white hover:text-rt-primary bg-black/40 hover:bg-black/60 p-4 rounded-full transition-all duration-300 border border-white/5 shadow-lg"
                        title="Próxima (Seta Direita)"
                        id="lightbox-next-btn"
                    >
                        <FaChevronRight className="text-2xl" />
                    </button>
                </div>

                {/* Image Caption Footer */}
                {currentImage.alt && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-6 left-4 right-4 text-center text-white/80 pointer-events-none select-none px-6"
                    >
                        <p className="bg-black/40 backdrop-blur-sm px-6 py-2.5 rounded-full inline-block max-w-xl text-sm md:text-base font-medium border border-white/5 tracking-wide">
                            {currentImage.alt}
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
}
