const emailValidator = (req, res, next) => {
  const { email } = req.body;
  const matcher = /^([\w-.]+)@((\[[\d]{1,3}\.)|(([\w]+\.)+))([a-zA-Z]{2,4}|[\d]{1,3})$/;
  if (!email) return res.status(400).send({ message: 'email é obrigatório' }) ;
  if (!matcher.test(email)) return res.status(400).send({ message: 'email fora do formato' });
  next();
};

module.exports = emailValidator;
