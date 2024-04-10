import Questionario from "@/components/Questionario";
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

  function questaoRespondida(questa: QuestaoModel) {
  }

  function irPraProximoPasso() {
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Questionario 
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  );
}
 
export default Home;