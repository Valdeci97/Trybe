const readline = require('readline-sync');

const aposta = readline.questionInt('Escolha um número entre 1 e 10: ');

const sorteio = (aposta) => {
  if (aposta <= 0 || aposta > 10) {
    console.log('número informado inválido para o sorteio.')
  } else {
    const result = Math.floor(Math.random() * 10 + 1);
    result === aposta ?
      console
        .log(`Parabéns! o número sorteado foi o seu. ${aposta}`) :
          console.log(`Você não ganhou. número sorteado ${result}, escolhido ${aposta}`);
  }
}

console.log(sorteio(aposta));

module.exports = sorteio;