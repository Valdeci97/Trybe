let x = 1;

function sum(){
  let somatorio = 0;
  for (let i = 1; i <= x; i += 1){
    somatorio = somatorio + i;
  }
  if (x < 0){
    somatorio = x;
    return somatorio + ' número menor que zero. \nNão calculamos esse caso particular.'
  }
  return somatorio;
}

console.log(sum(x));