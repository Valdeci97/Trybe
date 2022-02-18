const passwordValidator = (req, res, next) => {
  const { password } = req.body;
  if (!password || password === '') {
    return res.status(400).send({ message: 'Password é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).send({ message: 'Password deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = passwordValidator;
