//Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
    } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const organizingArray = (a, b) => (a - b);

console.log(oddsAndEvens.sort(organizingArray));

const arrayColection = (a, b) => (a > b);

console.log(oddsAndEvens.sort(arrayColection));

//Duas formas de se retornar o array numérico em ordem crescente. fonte: https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores

//Parte II

//exercício 1
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

const factorialNumber = n => n > 1 ? n * factorialNumber(n - 1) : 1;

console.log(factorialNumber(5));

//Exercício 2
const comparingWords = (x) => {
  let words = x.split(' ');
  let count = 0;
  let text = '';
  for (const word of words) {
    if (word.length > count) {
      count = word.length;
      text = word;
    }
  }
  return text;
}

console.log(comparingWords('Antônio foi ao banheiro e não sabemos o que aconteceu'));

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]; //Separa o texto quando acha um espaço. organiza recebendo dois parâmetros, que vão ser aplicados em uma função.
//Essa função retorna o comprimento desses parâmetros de forma crescente a partir da posição 1 (index === 0).

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));