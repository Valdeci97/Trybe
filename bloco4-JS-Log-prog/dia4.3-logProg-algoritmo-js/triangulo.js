//Exercício 2
let n = 5;
let ast = '*';

for (let i = 1; i <= n; i += 1) {
  console.log(ast.repeat(i));
}

//Exercício 3 (espelhar o ex. 2)
let x = 5;
let symbol = '*';
let inputLine = '';
let position = x;

for (let iLine = 0; iLine < x; iLine += 1) {
  for (let iColumn = 1; iColumn <= x; iColumn += 1) {
    if (iColumn < position) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  position -= 1;
}

//Entendi o motivo de atribuir o x à outra variável. Esse era o meu erro no momento de atribuição das ordens dos for's.