const service = require('./service');

test('Testando a função que gera um número aleatório', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber).toHaveBeenCalledTimes(0);
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

test('Mock da função randomNumber para outro comportamento', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(1, 2)).toBe(0.5);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(1, 2);
})

describe('Mexendo com o funcionamento da função', () => {
  it('Retorna a multiplicação de três números', () => {
    service.randomNumber = jest.fn().mockImplementation((a = 1, b = 1, c = 1) => a * b * c);
  
    expect(service.randomNumber()).toBe(1);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith();
    expect(service.randomNumber(1, 3, 4)).toBe(12);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
    expect(service.randomNumber).toHaveBeenCalledWith(1, 3, 4);

  })
  
  it('Retorna o dobro de um número "n" qualquer', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);
    
    service.randomNumber = jest.fn().mockImplementation((a) => 2 * a);
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  })
})

describe('Testando implementações', () => {
  it('Implementa novo comportamento na função upper para lowerCase', () => {
    const upperMocked = jest.spyOn(service, 'upper').mockImplementation((str) => str.toLowerCase());
    
    service.upper('Hot');
    expect(upperMocked).toHaveBeenCalled();
    expect(upperMocked).toHaveBeenCalledTimes(1);
    expect(upperMocked).toHaveBeenCalledWith('Hot');
    expect(upperMocked('pIcturE')).toBe('picture');
    expect(upperMocked).toHaveBeenCalledTimes(2);
    expect(upperMocked).toHaveBeenCalledWith('pIcturE');

    service.upper.mockRestore();

    expect(service.upper('reino')).toBe('REINO');
  })
  
  it('Implementa novo compartamento para a função firsLetter para retornar última letra', () => {
    service.firstLetter = jest.fn().mockImplementation((str) => {
      const array = str.split('');
      return array[array.length - 1];
    })
  
    expect(service.firstLetter).toHaveBeenCalledTimes(0);
    expect(service.firstLetter('goku')).toBe('u');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('goku');
  })
  
  it('Novo compartamento para a função concatWords que deve retornar 3 palavras concatenadas', () => {
    service.concatWords = jest.fn().mockImplementation((first, second, third) => first + second + third);
  
    expect(service.concatWords('goku', 'vegeta', 'goten')).toBe('gokuvegetagoten');
    expect(service.concatWords).toHaveBeenCalled();
    expect(service.concatWords).toHaveBeenCalledTimes(1);
    expect(service.concatWords).toHaveBeenCalledWith('goku', 'vegeta', 'goten');
  })
})
