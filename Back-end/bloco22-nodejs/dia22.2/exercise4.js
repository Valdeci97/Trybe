const fs = require('fs').promises;

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome .
// Por exemplo: 1 - Homer Simpson .

// const fileReader = async (file) => {
//   try {
//     const res = await fs.readFile(`./${file}`, 'utf-8');
//     const content = JSON.parse(res); // => [{jsonContent},{}, ...];
//     const contentArray = content.map(({ id, name }) => `${id} - ${name}`);
//     const final = contentArray.forEach((element) => console.log(element))
//     return final;
//   } catch(err) {
//     console.log(err.message);
//   }
// };

// fileReader('simpsons.json');

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

// const findById = async (id) => {
//   const FILE = 'simpsons.json';
//   try {
//     const res = await fs.readFile(FILE, 'utf-8');
//     const content = JSON.parse(res);
//     const simpson = content.find((character) => character.id == id);
//     if (!simpson) {
//       throw new Error('id não encontrado');
//     }
//     console.log(simpson);
//   } catch(err) {
//     console.log(err.message);
//   }
// };

// findById(11);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// const removeId = async (file) => {
//   try {
//     const res = await fs.readFile(`${file}`, 'utf-8');
//     const content = JSON.parse(res);
//     const result = content.filter(({ id }) => id !== '10' && id !== '6');
//     await fs.writeFile(`${file}`, JSON.stringify(result));
//     console.log('Arquivo modificado com sucesso.');
//   } catch(err) {
//     console.log(err);
//   }
// };

// removeId('./simpsons.json');

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// const simpsonFamily = async (file1, file2) => {
//   const MAX_ID = 5;
//   try {
//     const res =  await fs.readFile(`${file1}`, 'utf-8');
//     const content = JSON.parse(res);
//     const family = content.filter((simpson) => Number(simpson.id) < MAX_ID);
//     await fs.writeFile(`${file2}`, JSON.stringify(family));
//     console.log('Arquivo criado com sucesso.');
//   } catch(err) {
//     console.log(err.message);
//   }
// };

// simpsonFamily('./simpsons.json', './simpsonFamily.json');

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

// const updateFile = async (file) => {
//   try {
//     const res = await fs.readFile(`${file}`, 'utf-8');
//     const content = JSON.parse(res);
//     const nelson = content.concat({ id: '8', name: 'Nelson Muntz'});
//     await fs.writeFile(`${file}`, JSON.stringify(nelson));
//     console.log('Informação inserida com sucesso.');
//   } catch(err) {
//     console.log(err.message);
//   }
// };

// updateFile('./simpsonFamily.json');

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json

const removeNelson = async (file) => {
  try {
    const res = await fs.readFile(`${file}`, 'utf-8');
    const content = JSON.parse(res);
    const finder = content.filter((person) => person.id !== '8');
    const newArray = [...finder, { id: '8', name: 'Maggie Simpson' }];
    await fs.writeFile(`${file}`, JSON.stringify(newArray));
    console.log('Informação alterada com sucesso.');
  } catch(err) {
    console.log(err.message);
  }
};

removeNelson('./simpsonFamily.json');