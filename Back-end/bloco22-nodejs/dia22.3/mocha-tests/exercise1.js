const signedNumber = (a) => {
  if (typeof(a) !== 'number') {
    return 'O valor deve ser um número';
  }
  const result = a > 0 ? 'positivo' : (a < 0 ? 'negativo' : 'neutro');
  return result;
};

signedNumber('a');

module.exports = signedNumber;