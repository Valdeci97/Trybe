const readline = require('readline-sync');
const imc = require('./imc');

console.log('Calculadora de imc');

const altura = readline.questionFloat('Qual a sua altura? ');
const peso = readline.questionFloat('Qual o seu peso? ');

const result = imc(altura, peso);

console.log(result);
