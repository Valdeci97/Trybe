let a = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let word;

function biggestWord(a){
  word = a[0];
  for (item in a){
    if (word.length < a[item].length){
      word = a[item];
    }
  }
  return word;
}

console.log(biggestWord(a));