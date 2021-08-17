let a = [2, 3, 2, 5, 8, 2, 3];

function repeatCounter(numeros){
  let contRepetido = 0;  //contagem de números repetidos 
  let contNumero = 0;  //contagem de números
  let indexNumeroRepetido = 0; //indice do número mais vezes repetido
  for (let index in numeros) {
    let verificaNumero = numeros[index]; //para um indice cria-se uma variável e atribue o valor na posição do indice 
    for (let index2 in numeros) { // cria-se outro indice para a análise dos valores
      if (verificaNumero === numeros[index2]) { //se a variável atribuida anteriormente tiver o mesmo valor do verificador 
        contNumero += 1; //a variável contadora adiciona uma unidade
      }
    }
    if (contNumero > contRepetido) { //se o contador de número for maior que o contador de números repetidos
      contRepetido = contNumero; //o contador de números repetidos recebe o contador de números
      indexNumeroRepetido = index; //o indice do número repetido recebe o valor do indice 
    }
    contNumero = 0; //reinicia o valor do contador numérico
  }
  return numeros[indexNumeroRepetido]; //retorna o valor do acervo da lista na posição do indice do número repitido.
}

console.log(repeatCounter(a))