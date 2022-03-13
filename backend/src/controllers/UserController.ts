import { Request, Response } from 'express';

const users = [
  { name: 'Gabriel', email: 'gabriel.duarte@email.com.br' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};