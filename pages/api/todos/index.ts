// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../../utils/todo';
import { todos } from '../../../utils/dummyData';

//ignore any type
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[]>
) {
  res.status(200).json(todos);
}
