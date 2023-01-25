const searchEmployee = require('./searchEmployee');

describe('testando a função searchEmployee', () => {
  it('testa se a função existe', () => {
    expect(searchEmployee).toBeInstanceOf(Function);
  });
});