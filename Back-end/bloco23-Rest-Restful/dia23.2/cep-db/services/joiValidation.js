const joi = require('joi');

const schema = joi.object({
  cep: joi.string().pattern(new RegExp(/\d{5}-\d{3}/)).required,
  logradouro: joi.string().not().empty().required,
  bairro: joi.string().not().empty().required,
  localidade: joi.string().not().empty().required,
  uf: joi.string().not().empty().length(2).required,
});

module.exports = schema;
