//Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatorio = 0;

for(let items of numbers) {
  //console.log(items);
}

//Exercício 2
function sigma(numbers){
  for (let i = 0; i < numbers.length; i += 1) {
    somatorio = somatorio + numbers[i];
  }
  return somatorio;
}

//console.log(sigma(numbers));

//Exercício 3
function media(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    somatorio = somatorio + numbers[i];
  }
  return (somatorio / numbers.length);
}

//console.log(media(numbers));

//Exercício 4
function analisaMedia(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    somatorio = somatorio + numbers[i];
  }
  let media = (somatorio / numbers.length);
  if (media > 20) {
    return 'Maior que vinte';
  } else {
    return 'Menor que vinte';
  }
}

//console.log(analisaMedia(numbers));

//Exercício 5
let maior = 0;

function maiorValor(numbers) {
  for (let item of numbers) {
    if (item > maior) {
      maior = item;
    }
  }
  return maior;
}

//console.log(maiorValor(numbers));

//Exercício 6

let numeroImpar = [];

function analisaNumeroImpar(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
      numeroImpar.push(numbers[i]);
    }
    if (numeroImpar === null) {
      return 'Nenhum valor no array é um número ímpar.'
    }
  }
  return numeroImpar;
}

console.log(analisaNumeroImpar(numbers));