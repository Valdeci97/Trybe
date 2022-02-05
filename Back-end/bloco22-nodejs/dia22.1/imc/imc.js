const message = console.log('Impossível calcular o imc.');

const imc = (height, weight) => {
  if (height <= 0 || weight <= 0) return message;
  if (height > 2.5 ) {
    const convertion = height / 100;
    const result = weight / convertion ** 2;
    return result;
  } else {
    const result = weight / height ** 2;
    return result;
  }
};

module.exports = imc;