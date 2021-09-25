const object = require('./numberByNumber');

// test('Analisa se a função ao ser implementada para receber dois números retorna sua divissão', () => {
//   object.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

//   expect(object.randomNumber(10, 2)).toBe(5);
//   expect(object.randomNumber).toHaveBeenCalled()
//   expect(object.randomNumber).toHaveBeenCalledTimes(1);
//   expect(object.randomNumber).toHaveBeenCalledWith(10, 2);
// }); Exercício 2

test('Analisa se a função ao ser implementada para receber três parâmetro retornar a multiplicação',
() => {
  object.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(object.randomNumber(3, 3, 3)).toBe(27);
  expect(object.randomNumber).toHaveBeenCalled();
  expect(object.randomNumber).toHaveBeenCalledTimes(1);
  expect(object.randomNumber).toHaveBeenCalledWith(3, 3, 3);
})

test('Analise se a função ao ser implementada retorna o dobro do parâmetro recebido', () => {
  object.randomNumber.mockReset();
  expect(object.randomNumber).toHaveBeenCalledTimes(0);

  object.randomNumber.mockImplementation((a) => a * 2);

  expect(object.randomNumber(5)).toBe(10);
  expect(object.randomNumber).toHaveBeenCalled();
  expect(object.randomNumber).toHaveBeenCalledTimes(1);
  expect(object.randomNumber).toHaveBeenCalledWith(5);
});