import { NextApiRequest, NextApiResponse } from 'next';
import questoes from '../bancoDeQuestoes';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const idSelecionado = typeof req.query.id === 'string' ? +req.query.id : undefined;

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado);

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(204).send("No Content");
  }
}

export default handler;