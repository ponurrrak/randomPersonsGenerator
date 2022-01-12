const write = require('fs').writeFile;

const genders = ['F', 'M',];
const femaleNames = ['Anna', 'Betty', 'Lisa', 'Audrey', 'Ursula',];
const maleNames = ['John', 'Peter', 'Jack', 'Winston', 'Michael',];
const lastNames = ['Novak', 'Carrey', 'Wild', 'King', 'Hopkins',];
const minAge = 18;
const maxAge = 78;
const output = 'people.json';
const errorMessage = 'Something went wrong';
const successMessage = 'File has been successfully generated! Check ' + output;
const peopleArray = [];
const personsNumber = 20;

const getRandomItem = (scope, from=0) => {
  const randomItem = Math.floor(Math.random() * (scope.length ? scope.length : scope) + from);
  return scope.length ? scope[randomItem] : randomItem;
}

const generateRandomPerson = () => {
  const person = {};
  person.gender = getRandomItem(genders);
  person.firstName = person.gender === 'F' ? getRandomItem(femaleNames) : getRandomItem(maleNames);
  person.lastName = getRandomItem(lastNames);
  person.age = getRandomItem(maxAge - minAge + 1, minAge);
  return person;
};

for(let i = 0; i < personsNumber; i++){
  peopleArray.push(generateRandomPerson());
}

write(output, JSON.stringify(peopleArray), (err) => {
  if (err){
    throw errorMessage;
  }
  console.log(successMessage);
});
