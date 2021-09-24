// import { myRemove } from './ex1-5'; //Sugestão do vscode. vamos ver koe. deu ruim, recebi uns links sobre o funcionamento do jest, lerei após esse teste.

const { myRemove } = require('./ex1-5');

let arrayTest = [];

describe('Testing manipulation of array elements', () => {
  beforeEach(() =>{
    arrayTest = [1, 2, 3, 4, 5];
  });

  afterEach(() => {
    arrayTest = [];
  })

  it('Return an new array', () => {
    expect(myRemove(arrayTest, 5)).toEqual([1, 2, 3, 4]);
  });

  it('Return an new array', () => {
    expect([1, 2, 3, 5]).toEqual(myRemove(arrayTest, 4));
  });

  it('Return an new array', () => {
    expect(arrayTest).toEqual(myRemove(arrayTest, 0));
  });
});