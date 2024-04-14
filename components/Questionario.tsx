import QuestaoModel from "@/model/questao";
import styles from '../styles/Questionario.module.css'
import Questao from "./Questao";
import Botao from "./Botao";

interface QuestionarioProps {
  questao: QuestaoModel
  ultima: boolean
  questaoRespondida: (questao: QuestaoModel) => void
  irPraProximoPasso: () => void
}

const Questionario = (props: QuestionarioProps) => {

  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? 
        <Questao 
        valor={props.questao}
        tempoPraResposta={10}
        respostaFornecida={respostaFornecida}
        tempoEsgotado={props.irPraProximoPasso} />
      : false 
      }
      <Botao onClick={props.irPraProximoPasso} texto={props.ultima ? "Finalizar" : "Proxima"} />
    </div>
  );
}

export default Questionario;