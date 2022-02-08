// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

const fs = require('fs').promises;

async function fileReader() {
  const array = ['finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const fileCreator = array.map((element, index) => 
    fs.writeFile(`./file${index + 1}.txt`, element));
  await Promise.all(fileCreator);

  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ];

  const content = await Promise.all(files.map((el) => fs.readFile(el, 'utf-8')));
  const newContent = content.join(' ');

  await fs.writeFile('./fileAllText.txt', newContent);
}

fileReader();
