const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const fileName = await question('Digite o caminho do arquivo que você deseja ler: ');
  try {
    const content = await fs.readFile(fileName, 'utf-8');
    const word = await question('Qual palavra deseja substituir? ');
    const newWord= await question('Qual a nova palavra? ');
    const newContent = content.replace(new RegExp(word, 'g'), newWord);
    console.log("resultado da substituição: ", newContent);
    const destinationPath = await question('Onde deseja salvar o resultado? ');
    await fs.writeFile(destinationPath, newContent);
    console.log('Salvo com sucesso');
  } catch(err) {
    console.log('Arquivo inexistente.');
  }
}

start();