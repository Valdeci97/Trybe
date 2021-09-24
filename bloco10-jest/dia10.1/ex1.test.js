const { sum } = require('./ex1-5');

describe('Testing the precision of function sum', () => {
  it('Return 9 as a result of the sum between 4 and 5', () =>{
    expect(9).toBe(sum(4, 5));
  });

  it('Return 0 if has no parameter to a or b', () => {
    expect(sum()).toBe(0);
  });

  it('Return "Parameters must be numbers."', () => {
    expect(() => { sum('a', 5) }).toThrowError(new Error('Parameters must be numbers.'));
  });

  it('Return "Parameters must be numbers."', () => {
    expect(() => { sum(5, 'm') }).toThrowError(new Error('Parameters must be numbers.'));
  });
});