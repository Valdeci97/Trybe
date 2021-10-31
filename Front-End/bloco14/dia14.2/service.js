const randomNumber = () => Math.floor(Math.random() * 101);

const upper = (str) => str.toUpperCase();

const firstLetter = (str) => {
  const array = str.split('');
  return array[0];
}

const concatWords = (first, second) => first + second;

module.exports = { randomNumber, upper, firstLetter, concatWords };