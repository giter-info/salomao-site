import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinux, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="relative bg-rt-green pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-blueGray-700">Siga-nos em nossas redes sociais!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Ficaremos felizes em ajudar a encontrar sua melhor modalidade de residência.
                        </h5>
                        <div className="flex flex-row gap-3 mt-6 lg:mb-0 mb-6 flex space-x-2">
                            <a href="https://www.instagram.com/residencial.salomao/" target="_blank"
                               rel="noopener noreferrer">
                                <button
                                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faInstagram} className=" bg-rt-green"/>
                                </button>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61565632582956" target="_blank"
                               rel="noopener noreferrer">
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faFacebook} className=" bg-rt-green"/>
                                </button>
                            </a>
                            <a href="mailto://contato@redesalomao.com.br" target="_blank"
                               rel="noopener noreferrer">
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} className=" bg-rt-green"/>
                                </button>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=5547999604301&text=Entrei%20em%20contato%20pelo%20novo%20site.%20"
                                target="_blank"
                            >
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className=" bg-rt-green"/>
                                </button>
                            </a>
                            <a
                                href="https://redesalomao.com.br/iff_plan/"
                                target="_blank"
                            >
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faLinux} className=" bg-rt-green"/>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                        <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                  Mapa do Site
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Início
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Sobre Nós
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Serviços
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Contato
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                  Links Úteis
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Como Contratar?
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            É uma Clínica?
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            É um serviço de recuperação para dependentes?
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="mailto://contato@redesalomao.com.br"
                                        >
                                            Fale Conosco
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300"/>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}