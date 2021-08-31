//Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
    } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const organizingArray = (a, b) => (a - b);

console.log(oddsAndEvens.sort(organizingArray));

const arrayColection = (a, b) => (a > b);

console.log(oddsAndEvens.sort(arrayColection));

//Duas formas de se retornar o array numérico em ordem crescente. fonte: https://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores
