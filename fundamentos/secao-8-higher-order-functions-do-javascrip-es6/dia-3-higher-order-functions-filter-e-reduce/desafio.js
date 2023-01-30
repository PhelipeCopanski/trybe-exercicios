const data = require('./dataDesafio');

// 1 - Calcule a quantidade total da população de todos os países.

// const expectedResult = 120797034;

const getPopulation = () => {
  return data.reduce((acc, curr) => acc + curr.population, 0);
};

console.log(getPopulation());