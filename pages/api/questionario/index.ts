import { NextApiRequest, NextApiResponse } from 'next';
import questoes from '../bancoDeQuestoes';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const filtradas = questoes.map(questao => questao.id);

  filtradas.sort(() => Math.random() - 0.5);

  res.status(200).json(filtradas)
}

export default handler;