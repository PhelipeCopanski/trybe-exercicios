// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Nectarina', 'Banana', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Aveia', 'Leite', 'Mel'];

const fruitSalad = (fruit, additional) => {
  const salada = [...fruit, ...additional];
  return salada;
};

// console.log(fruitSalad(specialFruit, additionalItens));

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const fullInformations = {...user, ...jobInfos};

const { name, age, nationality, profession, squad, squadInitials } = fullInformations;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);