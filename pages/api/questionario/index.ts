import { NextApiRequest, NextApiResponse } from 'next';
import questoes from '../bancoDeQuestoes';
import { embaralhar } from '@/functions/arrays';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const ids = questoes.map(questao => questao.id);

  res.status(200).json(embaralhar(ids))
}

export default handler;