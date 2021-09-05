// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names);

// // Para fixar

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(showEmailList);

// //

// const number = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = number.find(verifyEven);

// console.log(isEven); // 30

//console.log(verifyEven(9)); // False
//console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
//const isEven2 = number.find((number) => number % 2 === 0);

//console.log(isEven2); // 30

// Para fixar 2

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return number;
//   }
// }

// console.log(numbers.find((number) => findDivisibleBy3And5(number)));

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (items) => {
//   if (items.length === 5) {
//     return items;
//   }
// }

// console.log(names.find(findNameWithFiveLetters)); // Estava fazendo a lógica invertida :/

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// const findMusic = (id) => {
//   return musicas.find((musica) => musica.id === id);
// };

// console.log(findMusic('31031685'));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some((element) => element === name);
// };

// console.log(hasName(names, 'Ana'));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   return arr.every((element) => element.age >= minimumAge );
// }

// console.log(verifyAges(people, 18));

// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((a, b) => a.age - b.age); ordem crescente

// people.sort((a ,b) => b.age - a.age); ordem decrescente

// console.log(people);
