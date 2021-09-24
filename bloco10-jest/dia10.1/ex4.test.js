const { encode, decode } = require('./ex1-5');

describe('Testando função decode', () => {
  it('Retorna true caso encode seja uma function', () => {
    expect(true).toBe(typeof(encode) === 'function');
  });

  it('Retorna "c1s1" quando encode recebe "casa" como parâmetro', () => {
    expect('c1s1').toBe(encode('casa'));
  });

  it('Retorna "m2l" quando recebe "mel" como parâmetro', () => {
    expect(encode('mel')).toBe('m2l');
  });

  it('Retorna "m3l" quando recebe "mil" como parâmetro', () => {
    expect('m3l').toBe(encode('mil'));
  });

  it('Retorna "g4l" quando recebe "gol" como parâmetro', () => {
    expect(encode('gol')).toBe('g4l');
  });

  it('Retorna "ch5ch5" quando recebe "chuchu" como parâmetro', () => {
    expect('ch5ch5').toBe(encode('chuchu'));
  });

  it('Retorna "c5lt51r" quando recebe "cultuar" como parâmetro', () => {
    expect(encode('cultuar')).toBe('c5lt51r');
  });

  it('Retorna "ls" quando recebe "ls" como parâmetro', () => {
    expect('ls').toBe(encode('ls'));
  });
});

describe('Testando função decode', () => {
  it('Retorna "true" se o tipo de decode for "function"', () => {
    expect(typeof(decode)).toBe('function');
  });  

  it('Retorna "casa" quando recebe "c1s1" como parâmetro', () => {
    expect('casa').toBe(decode('c1s1'));
  });

  it('Retorna "beber" quando recebe "b2b2r" como parâmetro', ()=> {
    expect(decode('b2b2r')).toBe('beber');
  });

  it('Retorna "cricri" quando recebe "cr3cr3" como parâmetro', () => {
    expect('cricri').toBe(decode('cr3cr3'));
  });

  it('Retorna "golo" quano recebe "g4l4" como parâmetro', () => {
    expect(decode('g4l4')).toBe('golo');
  });

  it('Retorna "cru" quando recebe "cr5" como parâmetro', () => {
    expect('cru').toBe(decode('cr5'));
  });

  it('Retorna "golpear" quando recebe "g4lp21r" como parâmetro', () => {
    expect(decode('g4lp21r')).toBe('golpear');
  });

  it('Retorna "76" quando recebe "76" como parâmetro', () => {
    expect('76').toBe(decode('76'));
  });
});
