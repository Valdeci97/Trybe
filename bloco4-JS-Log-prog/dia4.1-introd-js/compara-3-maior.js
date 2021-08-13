const a = 4;
const b = 5;
const c = -2;

function compara(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log('O maior número escolhido foi: ' + compara(a, b, c));