const object = require('./randomNumber');

test('Testando se a função foi chamada, qual seu retorno e quantas foi chamada', () => {
  object.randomNumber = jest.fn().mockReturnValue(10);

  expect(object.randomNumber()).toBe(10);
  expect(object.randomNumber).toHaveBeenCalled();
  expect(object.randomNumber).toHaveBeenCalledTimes(1);
});