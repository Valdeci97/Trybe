const readline = require('readline-sync');
const distance = readline.questionFloat('Qual o valor da distância em km? ');
const time = readline.questionFloat('Qual o tempo de volta em minutos? ');

const speed = (distance, time) => distance / time;

console.log(speed(distance, time));

// Para fins didáticos fiquei com preguiça de tratar possíveis erros do usuário.
