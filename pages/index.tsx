import Questao from "@/components/Questao";
import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const Home = () => {
  const questaoTeste = new QuestaoModel(1, 'Qual a melhor cor?', [
    RespostaModel.errada('Vermelha'),
    RespostaModel.errada('Preto'),
    RespostaModel.errada('Azul'),
    RespostaModel.certa('Verde'),
  ])

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Questao valor={questaoTeste} />
    </div>
  );
}
 
export default Home;