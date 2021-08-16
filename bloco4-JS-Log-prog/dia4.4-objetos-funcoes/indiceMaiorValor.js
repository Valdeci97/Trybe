let bigger = 0;
let position = 0;

function higherIndex(a = []){
  for(let index = 0; index < a.length; index += 1){
    if (index === 0){
      bigger = a[index];
    } else if (a[index] > bigger){
      bigger = a[index];
      position = index;
    }
  }
  return position;
}

console.log(higherIndex([2, 3, 6, 7, 10, 1]));