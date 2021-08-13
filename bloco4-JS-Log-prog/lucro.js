const custo = 200;
const venda = -240;

function myProfit(a, b) {
  let calculation = venda - (custo + (custo * 0.2))
  if (a < 0 || b < 0) {
    return 'erro';
  } else if (calculation > 0) {
    return 'Parabéns! \nVocê teve um lucro de R$' + calculation;
  } else if (calculation < 0) {
    return 'Putz... \nVocê teve um prejuízo de R$' + calculation;
  } else {
    return 'Você não teve lucro e nem prejuízo.';
  }
}

console.log(myProfit(custo, venda));