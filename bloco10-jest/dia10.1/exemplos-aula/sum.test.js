// const { TestWatcher } = require("@jest/core");

const sum = (a, b) => a  + b;

test('Sum two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// TestWatcher() code que completou, vou pesquisar sobre depois.