const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

const youngPeople = people.filter((person) => {
  return person.age < 30;
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === 'developer');

console.log(developers);

const seniorDevs = people.filter((item) => item.position == 'senior dev');
console.log(seniorDevs);

const peter = people.find((person) => person.name === 'peter');
console.log(peter);

const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === 'anna');
console.log(peter.position);
console.log(anna[0].position);
