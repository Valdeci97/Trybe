const a = 3;
const b = 7;
const c = 5;

function evenTrue() {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    return true;
  };
  return false;
};

console.log(evenTrue(a, b, c))