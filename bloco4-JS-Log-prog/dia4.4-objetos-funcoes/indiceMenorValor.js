let a = [2, 4, -605, 7, -10, 0, -3];
let smaller = 0;
let position = 0;

function tinyIndex(){
  for(let i = 0; i < a.length; i += 1){
    if (i === 0){
      smaller = a[i];
      position = i;
    } else if(a[i] < smaller){
      smaller = a[i];
      position = i;
    }
  }
  return position;
}

console.log(tinyIndex(a));