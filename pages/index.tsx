import Questionario from "@/components/Questionario";
import QuestaoModel from "@/model/questao";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

const Home = () => {
  const router = useRouter();

  const [ids, setIds] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>();
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

  function idProximaPergunta() {
      const proximoIndice = ids.indexOf(questao?.id || -1) + 1;
      return ids[proximoIndice];
  }

  function irPraProximoPasso() {
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaQuestao(proximoId) : finalizar();
  }

  function irPraProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId);
  }

  function finalizar() {
    router.push({
      pathname: 'resultado',
      query: {
        total: ids.length,
        certas: respostasCertas
      }
    });
  }

  return questao ? (
    <Questionario 
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ) : false
}
 
export default Home;