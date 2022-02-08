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
};

async function open() {
  const fileName = await question('Digite o caminho do arquivo que você deseja ler: ');
  try {
    const content = await fs.readFile(fileName, 'utf-8');
    console.log(content);
  } catch(err) {
    console.log('Arquivo inexistente.');
  }
}

open();