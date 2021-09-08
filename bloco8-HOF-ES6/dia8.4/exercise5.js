const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, element) => 
    acc + element.split('').reduce((count, element) => {
      if (element === 'a' || element === 'A') return count += 1;
      return count;
    }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);