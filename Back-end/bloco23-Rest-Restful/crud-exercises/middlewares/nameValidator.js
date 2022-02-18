const nameValidator = (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!firstName || firstName === '') {
    return res.status(400).send({  message: 'firstName é obrigatório' });
  }
  if (!lastName || lastName === '') {
    return res.status(400).send({  message: 'lastName é obrigatório' });
  }
  next();
};

module.exports = nameValidator;
