import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { useState } from "react";

const questaoMock = new QuestaoModel(1, 'Qual a melhor cor?', [
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Preto'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Verde'),
])

const Home = () => {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice));
  }

  function tempoEsgotado() {
    if (questao.naoRespondida) {
      setQuestao(questao.responderCom(-1));
    }
  }

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Questao valor={questao} 
        respostaFornecida={respostaFornecida} 
        tempoEsgotado={tempoEsgotado}
      />
    </div>
  );
}
 
export default Home;