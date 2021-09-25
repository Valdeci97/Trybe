const object = require('./numberByNumber');

test('Analisa se a função ao ser implementada para receber dois números retorna sua divissão', () => {
  object.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(object.randomNumber(10, 2)).toBe(5);
  expect(object.randomNumber).toHaveBeenCalled()
  expect(object.randomNumber).toHaveBeenCalledTimes(1);
  expect(object.randomNumber).toHaveBeenCalledWith(10, 2);
});