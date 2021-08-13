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