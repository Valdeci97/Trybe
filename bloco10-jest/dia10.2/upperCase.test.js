const uppercase = require('./upperCase.js');

test('Retornar todas as letras passadas em caixa alta', (done) => {
  uppercase('goku', (str) => {
    try{
      expect(str).toBe('GOKU');
      done();
    } catch (error){
      done(error);
    };
  });
});