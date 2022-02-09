const signedNumber = (a) => {
  const result = a > 0 ? 'positivo' : (a < 0 ? 'negativo' : 'neutro');
  return result;
};

module.exports = signedNumber;