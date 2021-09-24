const sum = (a = 0 , b = 0) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Parameters must be numbers.');
  }
  return a + b;
};

const myRemove = (arr, item) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

const fizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 5 === 0 && num % 3 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
};

module.exports = {
  sum,
  myRemove,
  fizzBuzz
};
