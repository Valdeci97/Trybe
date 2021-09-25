const object = require('./ex4-5');

test('Testa a implementação da função upperCase em caixa baixa', () => {
  object.upperCase = jest.fn().mockImplementation((word) => word.toLowerCase());

  expect(object.upperCase('Amália')).toBe('amália');
  expect(object.upperCase).toHaveBeenCalled();
  expect(object.upperCase).toHaveBeenCalledTimes(1);
  expect(object.upperCase).toHaveBeenCalledWith('Amália');
});

test('Testa a implementação da função firsLetter para a última letra', () => {
  object.firstLetter = jest.fn().mockImplementation((word) => word.charAt(word.length - 1));

  expect(object.firstLetter('Goku')).toBe('u');
  expect(object.firstLetter).toHaveBeenCalled();
  expect(object.firstLetter).toHaveBeenCalledTimes(1);
  expect(object.firstLetter).toHaveBeenCalledWith('Goku');
});

test('Testa a implementação da função concatString para três parâmetros concatenados', () => {
  object.concatString = jest.fn().mockImplementation((w1, w2, w3) => w1 + w2 + w3);

  expect(object.concatString('Espeto', 'de', 'gato')).toBe('Espetodegato');
  expect(object.concatString).toHaveBeenCalled();
  expect(object.concatString).toHaveBeenCalledTimes(1);
  expect(object.concatString).toHaveBeenCalledWith('Espeto', 'de', 'gato');
});