//Objetivo desse arquivo é começar a usar alguns teste unitários para compreendê-los melhor. 
const assert = require('assert');

const sum = (x, y) => x + y;

const expected = sum(3, 5);

assert.strictEqual(expected, 8, '3 + 5 = 8'); //Compara se a variável expected é do tipo number e tem valor 8.

const division = (x, y) => { 
  if (y === 0) {
    throw new Error('parameter y must be different than 0');
  }
  return x / y;
}

const expectedDivision = division(12, 4);

assert.strictEqual(division(12, 4), 3);
assert.throws(() => {division(10, 0);}, /Error: parameter y must be different than 0/);
