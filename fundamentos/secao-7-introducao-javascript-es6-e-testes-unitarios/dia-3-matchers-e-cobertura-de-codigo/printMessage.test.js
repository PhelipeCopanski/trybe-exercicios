const { info, printMessage } = require('./printMessage');

describe('Testando a função printMessage', () => {
  it('teste a função para garantir que o objeto passado como parâmetro possui a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });

  it('teste fluxo de exceção função printMessage', () => {
    expect(() => { printMessage('Margarida') }).toThrow('objeto inválido');
  });
});