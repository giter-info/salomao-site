import {motion} from "framer-motion";
import Link from "next/link";

export default function MateriaisGridComponent() {

    const Card = ({title, fullText, link, onClick}) => {
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
                <div className="text-center pt-8">
                    <Link href={link} className="bg-rt-green p-2 rounded-lg cursor-pointer" target="_blank">
                        Acesse aqui o material
                    </Link>
                </div>
            </div>
        );
    };

    const cardsData = [
        {
            title: "PORTARIA Nº 106, DE 11 DE FEVEREIRO DE 2000",
            fullText: {
                1: "Emitido pelo Ministério da Saúde, essa portaria cria o Serviço Residencial Terapêutico e norteia" +
                    " seu funcionamento.",
            },
            link: "https://cetadobserva.ufba.br/sites/cetadobserva.ufba.br/files/106_0.pdf"
        },{
            title: "PORTARIA Nº 3.090, DE 23 DE DEZEMBRO DE 2011",
            fullText: {
                1: "Altera a Portaria nº 106/GM/MS, de 11 de fevereiro de 2000, e dispõe, no âmbito da Rede de" +
                    " Atenção Psicossocial, sobre o repasse de recursos de incentivo de custeio e custeio mensal" +
                    " para implantação e/ou implementação e funcionamento dos Serviços Residenciais Terapêuticos (SRT).",
            },
            link: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2011/prt3090_23_12_2011_rep.html"
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    fullText={card.fullText}
                    link={card.link}
                />
            ))}
        </div>
    );
}