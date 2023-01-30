const data = require('./data');

// const expectedResult = 'O Senhor dos Anéis';

// 🚀 6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.

const authorWith3DotsOnName = () => {
  return data.filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))[0].name;
};

console.log(authorWith3DotsOnName());