const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  // new Promise((resolve, reject) => {
  //   setTimeout(()=> {
  //     const animalName = Animals.find((element) => element.name === name);

  //     if (animalName) {
  //       return resolve(animalName);
  //     };

  //     return reject(new Error('Nenhum Animal com esse nome!'));
  //   }, 150);
  // });

  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.reduce((animal) => animal.name === name);

      if (result) {
        return resolve(result);
      }

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
}


const getAnimal = (name) => {
  // return findAnimalByName(name);
};

console.log(findAnimalByName('Dorminhoco'));

// describe('Testando promise - findAnimalByName', () => {
//   describe('Quando existe o animal com o nome procurado', () => {
//     test('Retorne o objeto do animal', () => (
//       findAnimalByName('Dorminhoco').then((animal) => {
//         expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
//       })
//     ));
//   });
// })

// describe('Analisando a função findAnimal', () => {
//   describe('Quando existe animal com o nome informado', () => {
//     it('retorna o objeto com o nome do animal', () => {
//       findAnimalByName('Dorminhoco').then((result) => {
//         expect(result).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
//       });
//     });
//   });
// });

// ---------------------

// describe('Testando promise - findAnimalByName', () => {
//   describe('Quando existe o animal com o nome procurado', () => {
//     test('Retorne o objeto do animal', () => {
//       expect.assertions(1);
//       return getAnimal('Dorminhoco').then(animal => {
//         expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
//       });
//     });
//   });

//   describe('Quando não existe o animal com o nome procurado', () => {
//     test('Retorna um erro', () => {
//       expect.assertions(1);
//       return getAnimal('Bob').catch(error =>
//         expect(error).toEqual('Nenhum animal com esse nome!')
//       );
//     });
//   });
// });