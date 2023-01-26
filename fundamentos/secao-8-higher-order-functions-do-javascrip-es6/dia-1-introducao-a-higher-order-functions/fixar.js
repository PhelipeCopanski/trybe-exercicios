const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

emailListInData.forEach ((email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

// fixar 2 find:

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(verifyNumbers);

//fixar 3 find:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const verifyNames = names.find((name) => name.length === 5);
console.log(verifyNames);

// fixar 4 find:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui

const verifyMusicas = musicas.find((elemento) => elemento.id === '31031685');
console.log(verifyMusicas);

// fixar 1 Array.some:

const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((people) => people === name);
};

console.log(hasName(names1, 'Ana'));
console.log(hasName(names1, 'Pedro'));

// fixar 2 Array.every:

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  //Adicione seu código aqui

  const verifyAges = (array, age) => {
    return array.every((person) => person.age >= age);
  };

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));