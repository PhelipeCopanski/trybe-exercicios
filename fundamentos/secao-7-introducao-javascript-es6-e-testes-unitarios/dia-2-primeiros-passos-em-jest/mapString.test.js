const { encode, decode } = require('./mapString');

describe('Testando encode e decode', () => {
    it ('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
    });

    it ('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a')).toBe('1');
    })
});