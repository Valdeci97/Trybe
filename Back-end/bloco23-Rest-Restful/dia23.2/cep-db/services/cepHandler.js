const cepHandler = (req, res, next) => {
  const { cep } = req.params
  const matcher = /\d{5}-?\d{3}/;
  if(!matcher.test(cep)) {
    return res.status(400).send({
      error: {
        code: 'invalid Data',
        message: 'Cep inválido'
      }
    });
  }
  next();
};

module.exports = cepHandler;
