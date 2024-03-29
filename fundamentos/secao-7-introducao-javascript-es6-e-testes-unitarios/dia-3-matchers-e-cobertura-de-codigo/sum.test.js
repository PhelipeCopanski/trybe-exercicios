const sum = require('./sum');

describe('Teste a função sum', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Teste se a função sum lança um erro quando os parâmetros são number 4 e string 5 ', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  it('Teste se a mensagem de erro é parameters must be numbers quando realizar a chamada sum(4, string 5)', () => {
    expect(() => { sum(4, '5') }).toThrow(new Error ('parameters must be numbers'));
  });
});