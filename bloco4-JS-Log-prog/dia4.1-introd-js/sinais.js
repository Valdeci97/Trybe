const a = 9;

function sinais(a) {
  if (a > 0) {
    return 'positive';
  } else if (a < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

console.log('O número escolhido tem valor: ' + sinais(a));