const hydrate = (word) => {
  // o sinal de adição serve para pegar mais de um valor numérico advindo de um texto. o g diminui ao índice do array que o match gerou; sem o "+" quando digitei '123' retornou NaN.
  const n = word.match(/\d+/g); 
  const sum = n.reduce(((element, curr) => element + parseInt(curr)), 0);
  return sum === 1 ? `1 copo de água` : `${sum} copos de água`
}

module.exports = hydrate;