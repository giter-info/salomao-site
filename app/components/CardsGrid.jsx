import {useState} from "react";

const Card = ({title, fullText, isExpanded, onClick}) => {
    // Função para gerar o teaser com as 18 primeiras palavras
    const teaser = fullText[1].split(" ").slice(0, 18).join(" ") + "...";

    // Função para gerar os parágrafos de cada seção do fullText
    const extractParagraph = (obj) => {
        return Object.entries(obj).map(([key, value]) => (
            <p className="mt-2 text-rt-green" key={key}>
                {value}
            </p>
        ));
    };

    return (
        <div className="bg-rt-info p-4 rounded-lg shadow-md text-white" onClick={onClick}>
            <h3 className="text-xl font-bold mb-2 text-rt-green">{title}</h3>

            {/* Teaser + "Veja mais" */}
            <p className="mb-2 text-rt-green">
                {!isExpanded ? teaser : ""}{" "}
                <button className="underline text-sm">
                    {isExpanded ? "Veja menos" : "Veja mais"}
                </button>
            </p>

            {/* Conteúdo completo escondido por padrão, expande ao clicar */}
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    isExpanded ? "max-h-screen" : "max-h-0"
                }`}
            >
                {isExpanded && extractParagraph(fullText)}
            </div>
        </div>
    );
};

export default function CardsGrid() {
    const [expandedCardIndex, setExpandedCardIndex] = useState(null);

    const cardsData = [
        {
            title: "Esquizofrenia (F20.-)",
            fullText: {
                1: "Os sintomas característicos da esquizofrenia envolvem uma gama de disfunções cognitivas, comportamentais e emocionais. O diagnóstico envolve o reconhecimento de um conjunto de sinais e sintomas associados a um funcionamento profissional ou social prejudicado. Indivíduos com o transtorno apresentarão grandes variações na maior parte das características da doença. Pelo menos dois desses sintomas devem estar presentes: delírios, alucinações ou discurso desorganizado, comportamento grosseiramente desorganizado ou catatônico.",
                2: "Os indivíduos podem manifestar uma variedade de crenças incomuns ou estranhas: ideias de referência ou pensamento mágico; podem ter experiências perceptivas raras: sentir a presença de uma pessoa invisível; seu discurso pode ser, em geral, compreensível, porém vago; seu comportamento pode ser incomum, mas não grosseiramente desorganizado. Indivíduos que eram socialmente ativos podem ficar retraídos em relação a rotinas anteriores. Esses comportamentos são frequentemente o primeiro sinal da doença.",
                3: "Sintomas de oscilação do humor podem ocorrer concomitantemente com a sintomatologia da fase ativa. Geralmente apresentam afeto inadequado (p. ex., rir na ausência de um estímulo apropriado); humor disfórico que pode assumir a forma de depressão, ansiedade ou raiva; padrão de sono perturbado (p. ex., sono durante o dia e atividade durante a noite); falta de interesse em alimentar-se ou recusa da comida; ansiedade e fobias. Déficits cognitivos podem incluir diminuições na memória declarativa, na memória de trabalho, na função da linguagem e em outras funções executivas, bem como velocidade de processamento mais lenta. Anormalidades no processamento sensorial e na capacidade inibitória, bem como redução na atenção, são também encontradas. Alguns indivíduos com psicose podem não ter consciência de seu transtorno e não perceber os sintomas da esquizofrenia, isso leva a falta de adesão ao tratamento, aumento no número de tratamentos involuntários, funcionamento psicossocial mais pobre, agressividade e hostilidade.",
            }
        }, {
            title: "Transtornos delirantes persistentes (F22.-)",
            fullText: {
                1: "A característica essencial do transtorno delirante é a presença de um ou mais delírios que persistem por pelo menos um mês. Não é feito o diagnóstico de transtorno delirante se o indivíduo alguma vez teve apresentação de sintomas para esquizofrenia. Independentemente do impacto direto dos delírios, prejuízos no funcionamento psicossocial podem estar mais circunscritos que os encontrados em outros transtornos psicóticos como a esquizofrenia, e o comportamento não é claramente bizarro ou esquisito.",
                2: "Problemas sociais, conjugais ou profissionais podem ser consequências de crenças ou transtorno delirante. Indivíduos com transtorno delirante podem ser capazes de descrever, de forma factual, que outras pessoas veem suas crenças como irracionais; são incapazes, no entanto, de aceitar isso. Muitos indivíduos desenvolvem humor irritável ou disfórico, que costuma ser compreendido como uma reação às suas crenças delirantes. Raiva e comportamento violento podem ocorrer com os tipos persecutório, ciumento e erotomaníaco. A pessoa pode se envolver em comportamento litigioso ou antagonista.",
            }
        }, {
            title: "Transtornos psicóticos agudos e transitórios (F23.-)",
            fullText: {
                1: "A característica essencial do transtorno psicótico breve consiste em uma perturbação que envolve o aparecimento repentino de pelo menos um dos seguintes sintomas psicóticos positivos: delírios, alucinações, discurso desorganizado ou comportamento psicomotor grosseiramente anormal, incluindo catatonia (forma de esquizofrenia que apresenta uma alternância entre períodos de passividade e de negativismo e períodos de súbita excitação). Início súbito é definido como uma mudança de um estado não psicótico para um estado claramente psicótico em duas semanas, geralmente sem sintomas prévios. Um episódio da perturbação tem duração mínima de um dia e a pessoa eventualmente tem um retorno completo ao nível de funcionamento.",
                2: "Pessoas com transtorno psicótico breve costumam vivenciar turbulência emocional ou grande confusão. Podem apresentar mudanças rápidas de um afeto intenso a outro. Ainda que a perturbação seja breve, o nível de prejuízo pode ser grave, podendo haver necessidade de supervisão para garantir o atendimento às necessidades nutricionais e higiênicas e para que a pessoa fique protegida das consequências de julgamento insatisfatório, prejuízo cognitivo ou atos baseados em delírios. Há risco aumentado de comportamento suicida, particularmente durante o episódio agudo.",
            }
        }, {
            title: "Transtorno Afetivo Bipolar (F31-)",
            fullText: {
                1: "O transtorno afetivo bipolar caracteriza-se por um curso clínico de episódios de humor recorrentes, consistindo em um ou mais episódios depressivos e pelo menos um episódio hipomaníaco, além de os sintomas representarem uma mudança notável do comportamento e do funcionamento habitual do indivíduo. Os episódios depressivos ou as oscilações de humor causam sofrimento ou prejuízo clinicamente significativo no funcionamento social, profissional ou em outras áreas importantes da vida do sujeito. Os episódios hipomaníacos podem não ser vistos como patológicos ou prejudiciais, embora outras pessoas possam se sentir perturbadas por seu comportamento inadequado.",
                2: "Uma característica comum do transtorno bipolar é a impulsividade, que pode contribuir com tentativas de suicídio e transtornos por uso de substância. Pode haver níveis aumentados de criatividade em alguns casos. A relação pode ser, no entanto, não linear; isto é, grandes realizações criativas na vida têm sido associadas a formas mais leves de transtorno bipolar. A satisfação que se tem com a criatividade aumentada durante episódios hipomaníacos pode contribuir para ambivalência quanto a buscar tratamento ou prejudicar a adesão a ele.",
                3: "Episódio maníaco do tipo psicótico:",
                4: "Com características psicóticas: Delírios ou alucinações estão presentes a qualquer momento.",
                5: "Com características psicóticas congruentes com o humor: Durante episódios maníacos, o conteúdo de todos os delírios e alucinações é consistente com os temas maníacos típicos de grandiosidade, invulnerabilidade, etc., embora possa incluir também temas de suspeita ou paranóia, especialmente em relação a dúvidas de outras pessoas sobre as capacidades e realizações do indivíduo.",
                6: "Com características psicóticas incongruentes com o humor: O conteúdo dos delírios e das alucinações é inconsistente com os temas da polaridade episódica descritos anteriormente, ou o conteúdo é uma mistura de temas incongruentes e congruentes com o humor.",
                7: "Com catatonia: Este especificador pode ser aplicado a um episódio de mania ou depressão se as características de catatonia estão presentes durante a maior parte do episódio.",
            }
        }, {
            title: "Transtornos esquizoafetivos (F25.-)",
            fullText: {
                1: "O diagnóstico de transtorno esquizoafetivo baseia-se em uma avaliação de um período ininterrupto da doença durante o qual o indivíduo continua a exibir sintomas ativos ou residuais da doença psicótica. É necessário apresentar sintomas de delírios ou alucinações e episódio depressivo ou maníaco.",
                2: "O funcionamento profissional costuma estar prejudicado, contato social restrito e dificuldades com o autocuidado também estão presentes no transtorno esquizoafetivo. Esses Indivíduos podem ter risco aumentado de desenvolvimento posterior de episódios de transtorno depressivo maior ou transtorno bipolar se os sintomas de humor continuarem após a remissão dos sintomas psicóticos. Pode haver transtornos associados ao álcool ou relacionados a outras substâncias, bem como risco aumentado de tentativa de suicídio.",
            }
        }, {
            title: "Episódio depressivo grave (F32.3)",
            fullText: {
                1: "Esta categoria aplica-se a apresentações em que sintomas característicos de um transtorno depressivo que causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida do indivíduo.",
                2: "Com sintomas psicóticos",
                3: "Delírios e/ou alucinações estão presentes.",
                4: "Delírios e alucinações cujo conteúdo é coerente ou não com os episódios depressivos típicos de inadequação pessoal, culpa, doença, morte, niilismo ou punição merecida.",
            }
        }, {
            title: "Psicose alucinatória crônica (F29)",
            fullText: {
                1: "Esta categoria aplica-se a apresentações em que sintomas psicóticos causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida do indivíduo, mas não satisfazem os critérios para esquizofrenia e outros transtornos psicóticos.",
            }
        }, {
            title: "Outros Transtornos psicóticos não-orgânicos (F28)",
            fullText: {
                1: "O transtorno psicótico não-orgânico é uma condição reversível ou não de disfunção mental, que pode ser identificada como um distúrbio da anatomia fisiologia ou bioquímica do cérebro.",
                2: "O transtorno psicótico não orgânico são transtornos alucinatórios ou delirantes, assim como modificações de pensamento passando a ser mais desorganizados, e de personalidade que causam sofrimento clinicamente significativo ou prejuízo no funcionamento social, profissional ou em outras áreas importantes da vida do indivíduo.",
            }
        }
    ];

    const handleCardClick = (index) => {
        // Se o card já está expandido, feche-o; caso contrário, expanda-o
        setExpandedCardIndex(expandedCardIndex === index ? null : index);
    };

    return (
        <div className="grid grid-cols-1 gap-6">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    fullText={card.fullText}
                    isExpanded={expandedCardIndex === index}
                    onClick={() => handleCardClick(index)}
                />
            ))}
        </div>
    );
}
