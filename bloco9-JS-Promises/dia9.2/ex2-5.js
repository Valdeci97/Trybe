// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fecthPromise = () => {
  const myPromise = new Promise ((resolve, reject) => {
    const myArray = Array.from({ length: 10 }, () => Math.floor((Math.random() * 50) + 1));

    const sum = myArray.map((element) => element * element).reduce(((sum, number) => sum + number), 0);

    sum < 8000 ? resolve(sum) : reject(sum);
  });

  // myPromise
  // .then(() => console.log('Promise Resolvida'))
  // .catch(() => console.log('Promise rejeitada'));  Exercício 2

  // myPromise
  //   .then((sum) => [2, 3, 5, 10].map(element => sum / element))
  //   .then((sum) => console.log(sum))
  //   .catch((sum) => console.log(`Promise rejeitada ${sum}`));  Exercício 3

  // myPromise
  // .then((sum) => [2, 3, 5, 10].map((element) => element / sum))
  // .then((result) => console.log(result))
  // .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`)); exercício 4

  myPromise.then((sum) => [2, 3, 5, 10].map((element) => sum / element))
  .then((result) => result.reduce(((acc, curr) => acc + curr), 0))
  .then((number) => console.log(number.toPrecision(2)))
  .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
}

fecthPromise();

// const sumRandomNumbers = () => { Exercício bônus tudo com await e async, try e catch.
//   const myArray = Array.from(
//     { length: 10 },
//     () => Math.floor(Math.random() * 50) + 1
//   );
//   const sum = myArray.map(number => number * number)
//     .reduce((number, acc) => number + acc, 0);

//   if (sum >= 8000) {
//     throw new Error();
//   }

//   return sum;
// }

// const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
//   .reduce((number, acc) => number + acc);

// const fetchPromise = async () => {
//   try {
//     const sum = await sumRandomNumbers();
//     const sumFromSum = await sumArrayFromSum(sum);
//   } catch (error) {
//     console.log('É mais de oito mil! Essa promise deve estar quebrada!');
//   }
// }

// fetchPromise();