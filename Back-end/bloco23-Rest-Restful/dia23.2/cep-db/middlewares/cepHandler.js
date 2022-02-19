const isCepValid = require('../services/isCepValid');

const cepHandler = (req, res, next) => {
  const { cep } = req.params
  const isValid = isCepValid(cep);
  if(!isValid) {
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
