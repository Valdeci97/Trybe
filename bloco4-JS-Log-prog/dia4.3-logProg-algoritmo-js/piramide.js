let base = 5;
let middleWay = (base + 1) / 2;
let rightSide = middleWay;
let leftSide = middleWay;
let inputLine = '';

for (let iLine = 1; iLine <= middleWay; iLine += 1) {
  for (let iColumn = 0; iColumn <= base; iColumn += 1) {
    if (iColumn >= leftSide && iColumn <= rightSide) {
      inputLine = inputLine + '*';
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  leftSide -= 1;
  rightSide += 1; 
}

//Feito com ajuda do gabarito