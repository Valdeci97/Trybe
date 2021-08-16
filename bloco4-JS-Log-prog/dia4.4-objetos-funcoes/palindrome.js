function isPalindrome(a){
  for(item in a){
    if(a[item] !== a[(a.length - 1) - item] ){
      return false;
    }
  }
  return true;
}

function anotherView(b){
  let reverse = b.split('').reverse().join(''); 
  //reverse recebe "b" separado e sem espaço, isto é, caracter por caracter; após isso, tem seus caracteres ordenados do fim para o começo -ao contrário- e por fim, junta-os todos e finaliza o processo de declaração da variável.
  if(reverse === b){
    return true;
  } else{
    return false;
  }
}

console.log(isPalindrome('arara'));
console.log(anotherView('ana'));

//console.log(isPalindrome('arara'));