"use client";
import * as motion from "framer-motion/client";
import Image from "next/image";
import image1 from "@/app/images/estrutura/1.jpeg";
import image2 from "@/app/images/estrutura/2.jpeg";
import image3 from "@/app/images/estrutura/3.jpeg";
import image4 from "@/app/images/estrutura/4.jpeg";
import image5 from "@/app/images/estrutura/5.jpeg";
import image6 from "@/app/images/estrutura/6.jpeg";
import image7 from "@/app/images/estrutura/7.jpeg";
import image8 from "@/app/images/estrutura/8.jpeg";
import image9 from "@/app/images/estrutura/9.jpeg";
import image10 from "@/app/images/estrutura/10.jpeg";
import image11 from "@/app/images/estrutura/11.jpeg";
import image12 from "@/app/images/estrutura/12.jpeg";
import image13 from "@/app/images/estrutura/13.jpeg";
import image14 from "@/app/images/estrutura/14.jpeg";
import image15 from "@/app/images/estrutura/15.jpeg";
import image16 from "@/app/images/estrutura/16.jpeg";
import image17 from "@/app/images/estrutura/17.jpeg";
import image18 from "@/app/images/estrutura/18.jpeg";

// Exemplo de array de imagens apenas com src e alt
const images = [
    {src: image1, alt: "Imagem 1"},
    {src: image2, alt: "Imagem 2"},
    {src: image3, alt: "Imagem 3"},
    {src: image4, alt: "Imagem 4"},
    {src: image6, alt: "Imagem 6"},
    {src: image7, alt: "Imagem 7"},
    {src: image5, alt: "Imagem 5"},
    {src: image8, alt: "Imagem 8"},
    {src: image9, alt: "Imagem 9"},
    {src: image10, alt: "Imagem 10"},
    {src: image11, alt: "Imagem 11"},
    {src: image12, alt: "Imagem 12"},
    {src: image13, alt: "Imagem 13"},
    {src: image14, alt: "Imagem 14"},
    {src: image15, alt: "Imagem 15"},
    {src: image18, alt: "Imagem 18"},
    {src: image16, alt: "Imagem 16"},
    {src: image17, alt: "Imagem 17"},
];

export default function EstruturaGridComponent() {
    return (
        <div className="columns-1 md:columns-2 lg:columns-4">
            {images.map((image, index) => (
                <motion.div
                    className="px-2"
                    key={index}
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                >
                    <Image
                        className="mb-8 rounded-lg shadow-lg shadow-rt-dark border-2 border-rt-primary"
                        src={image.src}
                        alt={image.alt}
                    />
                </motion.div>
            ))}
        </div>
    );
}
