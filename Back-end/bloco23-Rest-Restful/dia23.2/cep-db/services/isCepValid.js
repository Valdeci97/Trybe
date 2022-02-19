const isCepValid = (cep) => {
  const matcher = /\d{5}-?\d{3}/;
  return matcher.test(cep);
};

module.exports = isCepValid;
