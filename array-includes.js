const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'lemon';
randomItem = 'milk';
// const isIncluded = groceries.includes(randomItem, 1);
// console.log(isIncluded);

if (groceries.includes(randomItem)) {
  console.log(`Yeah! it's on the list`);
}
