import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', async (req, res) => {
//    const user = await User.create({
//    name: 'Ricardo',
//    email: 'ricnr.100@gmail.com',
//    password_hash: '1',
//  });
//  return res.json(user);
// });

export default routes;
