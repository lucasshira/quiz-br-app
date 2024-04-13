import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";
import { useEffect, useState } from "react";

const questaoMock = new QuestaoModel(1, 'Qual a melhor cor?', [
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Preto'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Verde'),
]);

const BASE_URL = 'http://localhost:3000/api';

const Home = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock);
  const [respostasCertas, setRespostasCertas] = useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const ids = await resp.json();
    setIds(ids);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);

  useEffect(() => {
    ids.length > 0 && carregarQuestao(ids[0]);
  }, [ids]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function irPraProximoPasso() {}

  return (
    <Questionario 
      questao={questao}
      ultima={false}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  );
}
 
export default Home;