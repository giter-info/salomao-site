import * as motion from "framer-motion/client";
import Image from "next/image";
import logo from "@/app/images/layout/logo-rt.png";
import image1 from "@/app/images/portifólio/port1.jpeg";
import image2 from "@/app/images/portifólio/port2.jpeg";
import image3 from "@/app/images/portifólio/port3.jpeg";
import image4 from "@/app/images/portifólio/port4.jpeg";
import image5 from "@/app/images/portifólio/port5.jpeg";
import image6 from "@/app/images/portifólio/port6.jpeg";
import image7 from "@/app/images/portifólio/port7.jpeg";
import image8 from "@/app/images/portifólio/port8.jpeg";
import image9 from "@/app/images/portifólio/port9.jpeg";
import image10 from "@/app/images/portifólio/port10.jpeg";
import image11 from "@/app/images/portifólio/port11.jpeg";
import image12 from "@/app/images/portifólio/port12.jpeg";
import pin from "@/app/images/portifólio/pin.png";
import {FaWhatsapp} from "react-icons/fa";

export default function SaibaMaisPageComponent() {

    const obj = [
        {text: "Existimos para amenizar o sofrimento de famílias vítimas de transtorno mental.",},
        {text: "Os transtornos podem ser controlados e organizados!",},
        {
            text: "Possuímos uma equipe capacitada para estabilizar e cuidar de forma humanizada das pessoas sob" +
                " nossa responsabilidade.",
        },
        {text: "Vagas limitadas abertas.",}
    ];

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
                        className="text-4xl font-bold text-rt-info text-center mb-8 mt-16"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Nosso Portifólio
                    </motion.h2>
                </div>
                <div className="container mx-auto px-4">
                    {obj.map((t, i) => (
                        <motion.p
                            key={i}
                            className="text-xl p-2 rounded-lg text-rt-white text-md max-w-2xl mx-auto mb-2 text-center font-cardo"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            {t.text}
                        </motion.p>
                    ))}
                    <div className="flex justify-center py-2">
                        <a
                            href="https://api.whatsapp.com/send?phone=5547988080041&text=Entrei%20em%20contato%20pelo%20novo%20site.%20Gostaria%20de%20conversar%20sobre%20o%20residencial."
                            target="_blank"
                            className="mx-auto flex flex-row gap-2 rounded-full bg-rt-primary border-2 border-rt-info p-2"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp fill="rgb(27, 64, 43)" size={30} className="mx-1 pt-1"/>
                            <span className="text-rt-green text-2xl">Contato</span>
                        </a>
                    </div>
                    <motion.h3
                        className="font-script text-6xl font-bold text-rt-info text-center mb-8 mt-16"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        Respeitando o normal de cada um!
                    </motion.h3>
                    <div
                        className="columns-2 lg:columns-3 rounded-b-3xl border-x-2 border-b-2 border-rt-info p-2 xl:p-24 gap-2"
                    >
                        <div className="container">
                            <motion.div
                                className="px-2"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5, ease: "easeOut"}}
                            >
                                <Image
                                    src={image1}
                                    className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-info"
                                    alt="Primeira imagem do portifólio"
                                />
                            </motion.div>
                            <motion.div
                                className="px-2"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5, ease: "easeOut"}}
                            >
                                <Image
                                    src={image2}
                                    className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-info"
                                    alt="Primeira imagem do portifólio"
                                />
                            </motion.div>
                            <motion.div
                                className="px-2 hidden lg:block"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.5, ease: "easeOut"}}
                            >
                                <Image
                                    src={image3}
                                    className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-info"
                                    alt="Primeira imagem do portifólio"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="rounded-3xl bg-rt-primary py-16 mx-auto mt-12 px-3">
                        <div className=" mx-auto px-4">
                            <motion.h2
                                className="text-6xl font-bold text-rt-green text-center mb-8 font-script"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                Sobre Salomão
                            </motion.h2>
                            <div className="grid gap-8 md:grid-cols-1">
                                {/* Card 1 */}
                                <motion.div
                                    className="flex flex-col md:flex-row p-6 rounded-lg"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                >
                                    <motion.p
                                        className="text-xl xl:text-3xl p-2 rounded-lg text-rt-green text-md max-w-2xl mx-auto mb-12 text-center font-mont"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, delay: 0.2}}
                                    >
                                        O Serviço Residencial Terapêutico Salomão foi criado para oferecer um ambiente
                                        seguro e acolhedor à pacientes com transtornos mentais egressos ou não de
                                        internações psiquiátricas e hospitais de custódia.
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="rounded-3xl bg-rt-primary py-16 mx-auto mt-12 px-3">
                        <div className=" mx-auto px-4">
                            <motion.h2
                                className="text-6xl font-bold text-rt-green text-center mb-8 font-script"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                Como Chegar
                            </motion.h2>
                            <div className="grid gap-8 md:grid-cols-1">
                                <div className="mx-auto">
                                    <Image
                                        src={pin}
                                        alt="Outra imagem do portifólio"
                                    />
                                </div>
                                <motion.div
                                    className="flex flex-col md:flex-row p-6 rounded-lg"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.4}}
                                >
                                    <motion.p
                                        className="text-xl xl:text-3xl p-2 rounded-lg text-rt-green text-md max-w-2xl mx-auto mb-12 text-center font-mont"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, delay: 0.2}}
                                    >
                                        Rua Pedro Leo Meinschen, 210 - Belchior Alto - Gaspar - Santa Catarina
                                    </motion.p>

                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="rounded-3xl bg-rt-primary py-16 mx-auto mt-12 px-3">
                        <div className=" mx-auto px-4">
                            <motion.h2
                                className="text-6xl font-bold text-rt-green text-center mb-8 font-script"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                Nosso Residencial
                            </motion.h2>
                            <div className="grid gap-8 md:grid-cols-1">
                                <motion.p
                                    className="text-xl xl:text-3xl p-2 rounded-lg text-rt-green text-md max-w-2xl mx-auto mb-12 text-center font-mont"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: 0.2}}
                                >
                                    Casa em estilo rústico, combinando o aconchego da madeira
                                    e o contato com a natureza . Um local acolhedor.
                                </motion.p>
                                <motion.div
                                    className="px-2 xl:px-12 mx-auto"
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >
                                    <Image
                                        src={image4}
                                        className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                        alt="Primeira imagem do portifólio"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="rounded-3xl bg-rt-primary py-16 mx-auto mt-12 px-3">
                        <div className=" mx-auto px-4">
                            <motion.h2
                                className="text-6xl font-bold text-rt-green text-center mb-8 font-script"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                Ambiente Externo
                            </motion.h2>
                            <div className="grid gap-8 md:grid-cols-1">
                                <motion.div
                                    className="px-2 xl:px-12 mx-auto"
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >
                                    <Image
                                        src={image5}
                                        className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                        alt="Primeira imagem do portifólio"
                                    />
                                </motion.div>
                                <div
                                    className="container columns-2 xl:px-56"
                                >
                                    <motion.div
                                        className="px-2"
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, ease: "easeOut"}}
                                    >
                                        <Image
                                            src={image6}
                                            className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                            alt="Primeira imagem do portifólio"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="px-2"
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, ease: "easeOut"}}
                                    >
                                        <Image
                                            src={image7}
                                            className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                            alt="Primeira imagem do portifólio"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="rounded-3xl bg-rt-primary py-16 mx-auto mt-12 px-3">
                        <div className=" mx-auto px-4">
                            <motion.h2
                                className="text-6xl font-bold text-rt-green text-center mb-8 font-script"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                Ambientes Internos
                            </motion.h2>
                            <div className="grid gap-8 md:grid-cols-1">
                                <motion.div
                                    className="px-2 xl:px-12 mx-auto"
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >
                                    <Image
                                        src={image8}
                                        className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                        alt="Primeira imagem do portifólio"
                                    />
                                </motion.div>
                                <motion.div
                                    className="px-2 xl:px-12 mx-auto"
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >
                                    <Image
                                        src={image9}
                                        className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                        alt="Primeira imagem do portifólio"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="rounded-3xl bg-rt-primary py-16 mx-auto mt-12 px-3">
                        <div className=" mx-auto px-4">
                            <motion.h2
                                className="text-6xl font-bold text-rt-green text-center mb-8 font-script"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                Ambientes Internos
                            </motion.h2>
                            <div className="grid gap-8 md:grid-cols-1">
                                <motion.div
                                    className="px-2 xl:px-12 mx-auto"
                                    initial={{opacity: 0, scale: 0.9}}
                                    animate={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5, ease: "easeOut"}}
                                >
                                    <Image
                                        src={image10}
                                        className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                        alt="Primeira imagem do portifólio"
                                    />
                                </motion.div>
                                <div
                                    className="container columns-2 xl:px-56"
                                >
                                    <motion.div
                                        className="px-2"
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, ease: "easeOut"}}
                                    >
                                        <Image
                                            src={image11}
                                            className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                            alt="Primeira imagem do portifólio"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="px-2"
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{duration: 0.5, ease: "easeOut"}}
                                    >
                                        <Image
                                            src={image12}
                                            className="mb-8 h-auto shadow-lg shadow-rt-dark rounded-3xl border-4 border-rt-green"
                                            alt="Primeira imagem do portifólio"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-rt-primary mt-12">
                {/* Card 1 */}
                <motion.div
                    className="grid gap-8 md:grid-cols-1 md:flex-row p-6 rounded-lg py-12 container mx-auto"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.4}}
                >
                    <motion.p
                        className="text-lg xl:text-4xl p-2 rounded-lg text-rt-green text-md max-w-2xl mx-auto mb-12 text-center font-cardo"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        O Serviço Residencial Terapêutico Salomão foi criado para oferecer um ambiente
                        seguro e acolhedor à pacientes com transtornos mentais egressos ou não de
                        internações psiquiátricas e hospitais de custódia.
                    </motion.p>
                    <motion.p
                        className="text-lg xl:text-4xl p-2 rounded-lg text-rt-green text-md max-w-2xl mx-auto mb-12 text-center font-cardo"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        Esse trabalho visa fazer parte da
                        luta antimanicomial que busca
                        restabelecer os valores morais,
                        éticos, comportamentais e
                        espirituais, direcionando-os a
                        reabilitação social e cultural.
                    </motion.p>
                    <motion.div
                        className="text-lg xl:text-3xl p-2 rounded-lg text-rt-green text-md max-w-3xl mx-auto mb-12 text-center font-mont font-semibold"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                    >
                        ESTAMOS DISPONÍVEIS:
                        <ul className="mt-4">
                            <li>www.redesalomao.com.br</li>
                            <li>contato@redesalomao.com.br</li>
                            <li>(47) 98808-0041</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}