const { expect } = require('chai');
const signedNumber = require('../exercise1');


describe('Executa a função signedNumber', () => {
  describe('Teste para x maior que zero', () => {
    describe('Resposta', () => {
      it('Uma string', () => {
        const result = signedNumber(5);
        expect(result).a('string');
      });
      it('É positivo', () => {
        const result = signedNumber(5);
        expect(result).match(/positivo/i);
      });
    })
  });
  
  describe('Teste para x menor que zero', () => {
    describe('Resposta', () => {
      it('Uma string', () => {
        const result = signedNumber(-1);
        expect(result).a('string');
      });
      it('É negativo', () => {
        const result = signedNumber(-1);
        expect(result).match(/negativo/i);
      });
    });
  });
  
  describe('Teste para x igual a zero', () => {
    describe('Resposta', () => {
      it('Uma string', () => {
        const result = signedNumber(0);
        expect(result).a('string');
      });
      it('É Neutro', () => {
        const result = signedNumber(0);
        expect(result).match(/neutro/i);
      });
    });
  });

  describe('Teste para x não numérico', () => {
    describe('Resposta', () => {
      it('Uma string', () => {
        const result = signedNumber('a');
        expect(result).a('string');
      });
      it('Mensagem', () => {
        const result = signedNumber('a');
        expect(result).match(/o valor deve ser um número/i);
      });
    });
  });
});