const a = 8;
const b = 6;
const c = 4;

function oddTrue(a, b, c) {
  if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    return true;
  };
  return false;
};

console.log(oddTrue(a, b, c));