const wakingUp =  () => 'Acordando!';

const breakFast = () => 'Bora tomar café!';

const timeToSleep = () => 'Partiu dormir!';

const doingThings = (x) => console.log(x);

doingThings(wakingUp());
doingThings(breakFast());
doingThings(timeToSleep());

// Exercício 1: Crie uma função que retorne um objeto no formato {nome completo, email} respresentando uma nova pessoa contratada.

const firstID = (nome) => {
  const person = nome.replace(' ', '_');
  const info = {
    name: nome,
    email: `${person}@trybe.com`,
  };
  return info;
};

const secondId = (nome) => {
  const person = nome.replace(' ', '_');
  const info = {
    name: nome,
    email: `${person}@trybe.com`,
  };
  return info;
};

const thirdId = (nome) => {
  const person = nome.replace(' ', '_');
  const info = {
    name: nome,
    email: `${person}@trybe.com`,
  };
  return info;
};

const newEmployees = (object1, object2, object3) => {
  const employees = {
    id1: object1,
    id2: object2,
    id3: object3,
  }
  return employees;
};

console.log(newEmployees(firstID('Pedro Guerra'), secondId('Luiza Drumond'), thirdId('Carla Paiva')));

// Exercício 2: Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const randomNumber = () => Math.round(Math.random() * 5);

const goodLuck = (number, func) => {
  if (number === func) {
    console.log(`O número escolhido foi ${number} e o sorteado foi ${func}.`);
    return 'Parabéns, você ganhou!';
  }
  console.log(`O número escolhido foi ${number} e o sorteado ${func}.`);
  return 'Tente novamente!';
};

console.log(goodLuck(2, randomNumber()));