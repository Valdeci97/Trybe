const { getUserName } = require('./ex2-3');

describe('getUserName - promise', () =>{
  describe('Testa a função quando é passado um id válido', () => {
    it('Retorna o nome de usuário', () => {
      getUserName(1).then((result) => {
        expect(result).toEqual('Mark');
      });
    });
  });
});

describe('Testa a função quando é passado um id não válido', () => {
  it('Retorna um erro', () => {
    expect.assertions(1);
    return getUserName(0).catch((error) => {
      expect(error.message).toMatch('User with 0 not found.');
    });
  });
});

describe('getUserName - asyn/await', () => {
  describe('Quando o id passado é válido', () => {
    it('Retorna o nome de usário', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');
    });
  });

  describe('Quando o id passado não é válido', () => {
    it('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(0);
      } catch (error) {
        expect(error.message).toEqual('User with 0 not found.');
      }
    });
  });
});