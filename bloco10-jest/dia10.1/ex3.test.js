const { fizzBuzz } = require('./ex1-5');

describe('Make some calculations to return some words', () => {
  it('Return false if parameter is not a number', () => {
    expect(false).toBe(fizzBuzz('a'));
  });

  it('Return "fizz" if the paramater is divible by 3', () => {
    expect('fizz').toBe(fizzBuzz(12));
  });

  it('Return "buzz" if the parameter is divisible by 5', () => {
    expect(fizzBuzz(20)).toBe('buzz');
  });

  it('Return "fizzbuzz" if the parameter is divisible by 3 and 5 at the same time', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
});