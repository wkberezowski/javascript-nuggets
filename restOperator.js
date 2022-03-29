const fruits = ['apple', 'orange', 'banana', 'lemon'];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { name, ...rest } = person;
console.log(name);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

getAverage(person.name, 89, 76, 81, 100);
