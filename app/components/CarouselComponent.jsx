import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CarouselComponent() {
    const images = [
        "https://via.placeholder.com/1200x600.png?text=Imagem+1",
        "https://via.placeholder.com/1200x600.png?text=Imagem+2",
        "https://via.placeholder.com/1200x600.png?text=Imagem+3"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <div className="relative w-full h-full">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{opacity: 0, x: 300}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -300}}
                        transition={{duration: 0.5}}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Botões de navegação */}
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                &gt;
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 w-full flex justify-center">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 mx-2 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}