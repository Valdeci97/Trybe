beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Antes de cada teste se olha para o before each para verificar o que há inserido nesse bloco
// Após cada teste se olha para o after each para verificar o que há inserido nesse bloco
// o primeiro teste retorna um console.log com uma mensagem simples que troca o 'test' por 'beforeEach'
// Dentro do escopo describe os valores de beforeEach e afterEach são reiniciados e se tornam iguais; suponho que os valores do console.log se mantenham inalterados. vamos aos testes...

// Entendi após rodar o teste e vi que sempre olhamos um beforeEach e afterEach mesmo quando fora de um describe cmo nesse caso.