const readline = require('readline-sync');

console.log('Hello World');

const name = readline.question('Qual o seu nome? ');
const age = readline.questionInt('Qual a sua idade? ');

console.log(`Hello ${name}, how you doing? you're ${age} years old?! that's good.`);