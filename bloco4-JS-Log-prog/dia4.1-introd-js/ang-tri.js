const a = 45;
const b = 45;
const c = 90;

function analisaAngulo(a, b, c) {
  let soma = a + b +c;
  if (a < 0 || b < 0 || c < 0) {
  return 'erro';
  };
  if (soma < 180 || soma > 180) {
    return false;
  };
  if (soma === 180) {
    return true;
  };
}

console.log(analisaAngulo(a, b, c));