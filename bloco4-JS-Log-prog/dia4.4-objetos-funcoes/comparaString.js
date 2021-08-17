let string = 'unidos';
let stringEnd = 'os';

function comparingStrings(a, b){
  for (let i = 0; i < a.length; i += 1)
  if ((a[i] + a[i + 1]) === b){
    return true;
  }
  return false;
}

console.log(comparingStrings(string, stringEnd));