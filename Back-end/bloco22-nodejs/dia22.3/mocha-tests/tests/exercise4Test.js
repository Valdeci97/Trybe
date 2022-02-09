const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const fileReader = require('../exercise4');

describe('Executa a função fileReader', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('Resposta', () => {
    it('Uma string', () => {
      const result = fileReader('arquivoteste.txt', 'teste feito com mocha.');
      expect(result).a('string');
    });
    it('Mensagem é "ok"', () => {
      const result = fileReader('arquivoteste.txt', 'teste feito com mocha.');
      expect(result).match(/ok/i);
    });
  });
});