const wakingUp =  () => 'Acordando!';

const breakFast = () => 'Bora tomar café!';

const timeToSleep = () => 'Partiu dormir!';

const doingThings = (x) => console.log(x);

doingThings(wakingUp());
doingThings(breakFast());
doingThings(timeToSleep());

// Exercício 1: Crie uma função que retorne um objeto no formato {nome completo, email} respresentando uma nova pessoa contratada.

const teamMate = (nome) => {
  const email = `${nome.toLowerCase().replace(' ', '_')}@trybe.com` ;
  return `${nome}, ${email}`;
};

const newEmployees = (object) => {
  const employees = {
    id1: object('Pedro Guerra'),
    id2: object('Luiza Drumond'),
    id3: object('Carla Paiva')
  }
  return employees;
};

console.log(newEmployees(teamMate));

// Exercício 2: Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const randomNumber = () => Math.round(Math.random() * 5);

const goodLuck = (number, func) => {
  x = func()
  if (number === x) {
    console.log(`O número escolhido foi ${number} e o sorteado foi ${x}.`);
    return 'Parabéns, você ganhou!';
  }
  console.log(`O número escolhido foi ${number} e o sorteado ${x}.`);
  return 'Tente novamente!';
};

console.log(goodLuck(2, randomNumber));

// Exercício 3: Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testAnalyser = (x, y) => {
  let count = 0;
  if (y.length === 0){
    return count;
  }
  for(let i = 0; i < x.length; i += 1) {
    if (y[i] === 'N.A') {
      count = count;
    } else if(y[i] === x[i]) {
      count += 1;
    } else {
      count -= 0.5;
    };
  } 
  return count;
}


const testResult = (x, y, func) => {
  console.log(func(x, y));
};

testResult(RIGHT_ANSWERS, STUDENT_ANSWERS, testAnalyser);