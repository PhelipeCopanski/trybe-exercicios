const data = require('./data');

// const expectedResult = [
//   'O Senhor dos Anéis',
//   'Fundação',
//   'O Chamado de Cthulhu',
// ];

// 🚀 5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = () => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const booksAge = data.filter((book) => (anoAtual - book.releaseYear) >= 60);
  return booksAge.map((bookAge) => bookAge.name)
};

console.log(oldBooks());
