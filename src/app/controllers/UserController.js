import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findone({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User alredy exists' });
    }

    {id,name,email,provider} = await User.crete(req.body);

    return res.json({
      id,
      name,
      email,
      provider
    });
  }
}

export default new UserController();
