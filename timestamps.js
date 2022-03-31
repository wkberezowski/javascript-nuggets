console.log(new Date());

console.log(Date.now());
console.log(new Date().getTime());
console.log(new Date().valueOf());

setTimeout(() => {
  console.log(Date.now());
}, 1000);

let people = [];
people = [...people, { id: Date.now(), name: 'peter' }];

setTimeout(() => {
  people = [...people, { id: Date.now(), name: 'john' }];
  console.log(people);
}, 1000);

const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());

const firstDate = new Date();
const secondDate = new Date(2021, 8, 28);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDiffrence = secondValue - firstValue;
console.log(timeDiffrence);

const minutes = timeDiffrence / (1000 * 60);
console.log(minutes);
