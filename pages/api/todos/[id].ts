// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Todo } from '../../../utils/todo';
import { todos } from '../../../utils/dummyData';

//ignore any type
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo | undefined>
) {
  const { id } = req.query;
  const todo = todos.find((todo) => todo.id === id);
  res.status(200).json(todo);
}
