import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Ricardo',
    email: 'ricnr.100@gmail.com',
    password_hash: '1',
  });

  return res.json(user);
});

export default routes;
