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

const encode = (a) => {
  let words = a.split('');
  for (let letter = 0; letter < words.length; letter += 1) {
    switch(words[letter]) {
      case 'a':
        words[letter] = '1';
        break;
      case 'e':
        words[letter] = '2';
        break;
      case 'i':
        words[letter] = '3';
        break;
      case 'o':
        words[letter] = '4';
        break;
      case 'u':
        words[letter] = '5';
        break;
      default:
        break;
    }
  }
  return words.join('');
}

const decode = (a) => {
  let unscrambleWords = a.split('');
  for (let i = 0; i < unscrambleWords.length; i += 1) {
    switch(unscrambleWords[i]) {
      case '1':
        unscrambleWords[i] = 'a';
        break;
      case '2':
        unscrambleWords[i] = 'e';
        break;
      case '3':
        unscrambleWords[i] = 'i';
        break;
      case '4':
        unscrambleWords[i] = 'o';
        break;
      case '5':
        unscrambleWords[i] = 'u';
        break;
      default:
        break;
    }
  }
  return unscrambleWords.join('');
}

const techList = (arr, name) => {
  if (!arr.length) {
    throw new Error('Vazio!')
  }
  return [...arr].sort().map((element) => {
    return {
      tech: element,
      name,
    };
  });
};

console.log(typeof(techList));

module.exports = {
  sum,
  myRemove,
  fizzBuzz,
  encode,
  decode,
  techList
};
