import { NextApiRequest, NextApiResponse } from 'next';
import questoes from '../bancoDeQuestoes';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(questoes[0].paraObjeto());
}

export default handler;