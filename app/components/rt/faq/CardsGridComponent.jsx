import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

export default function CardsGridComponent() {
    const router = useRouter();

    const Card = ({title, fullText, onClick}) => {
        const extractParagraph = (obj) => {
            return Object.entries(obj).map(([key, value]) => (
                <p className="mt-2 text-rt-green" key={key}>
                    {value}
                </p>
            ));
        };

        return (
            <div className="bg-rt-info p-4 rounded-lg shadow-md text-white" onClick={onClick}>
                <h3 className="text-2xl font-bold mb-2 text-rt-green font-cardo py-2 text-center">{title}</h3>
                <motion.div
                    key="content"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className="mt-2 overflow-hidden"
                >
                    {extractParagraph(fullText)}
                </motion.div>
            </div>
        );
    };

    const cardsData = [
        {
            title: "É um lar de idosos?",
            fullText: {
                1: "Um Residencial Terapêutico não é um lar de idosos: Embora possa acolher pessoas de diferentes" +
                    " idades, o foco" +
                    " principal do Residencial Terapêutico não está no cuidado de idosos que precisam de auxílio" +
                    " diário para as atividades comuns da vida.",
                2: "O objetivo aqui é atender pessoas com transtornos mentais graves, oferecendo suporte para sua" +
                    " autonomia e qualidade de vida, algo muito além do que é praticado em uma casa de repouso ou" +
                    " lar de idosos.",
            }
        }, {
            title: "É uma clínica psiquiátrica?",
            fullText: {
                1: "Ao contrário de uma clínica, não há internações de curto ou longo prazo voltadas para" +
                    " tratamentos médicos intensivos.",
                2: "Em vez disso, o Residencial Terapêutico oferece um ambiente de moradia contínua, com suporte" +
                    " especializado e tratamento focado em reintegração social.",
                3: " Aqui, as pessoas são acolhidas para viver, não para ser hospitalizadas."
            }
        }, {
            title: "É uma comunidade terapêutica?",
            fullText: {
                1: "Diferente das comunidades terapêuticas, que são voltadas para o tratamento de pessoas com" +
                    " dependência de substâncias, o Residencial Terapêutico é um espaço para acolhimento de pessoas" +
                    " com transtornos mentais que, por diversos motivos, não têm como retornar às suas famílias ou" +
                    " que precisam de suporte diário após a alta hospitalar. ",
                2: "Ele proporciona cuidado especializado sem o caráter de recuperação de dependência."
            }
        }, {
            title: "Então, o que é um Residencial Terapêutico?",
            fullText: {
                1: "Um Residencial Terapêutico é uma moradia assistida, projetada para atender pessoas com" +
                    " transtornos mentais que, muitas vezes, não têm condições de morar com familiares ou estão sem" +
                    " alternativas de moradia após serem desinternadas de hospitais psiquiátricos.",
                2: "Ele oferece um lar estruturado e seguro, com o apoio de uma equipe multidisciplinar" +
                    " especializada, garantindo o acompanhamento necessário para que os moradores possam viver com" +
                    " dignidade e, sempre que possível, recuperar sua autonomia e se reintegrar à sociedade. "
            }
        }, {
            title: "Meu familiar está em surto psiquiátrico. Posso acionar o residencial?",
            fullText: {
                1: "O Residencial é um espaço para pacientes estáveis, ou seja, em caso de surto ele deve," +
                    " primeiramente, ser encaminhado através da SAMU à um serviço de emergência para estabilização e" +
                    " após alta ser encaminhado ao Serviço de Residência Terapêutica.",
            }
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    fullText={card.fullText}
                />
            ))}
            <div className="bg-rt-info p-4 rounded-lg shadow-md text-white">
                <h3 className="text-2xl font-bold mb-2 text-rt-green font-cardo py-2 text-center">Gostaria de
                    acessar Materiais Úteis?</h3>
                <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className="mt-2 overflow-hidden text-rt-green"
                >
                    Visite nossa página para acessar as Portarias e outros materiais sobre o Serviço Residencial
                    Terapêutico.
                </motion.div>
                <div className="text-center pt-8">
                    <p onClick={() => router.push("/materiais")} className="bg-rt-green p-2 rounded-lg cursor-pointer">
                        Clique aqui
                    </p>

                </div>
            </div>
        </div>
    );
}