const person = {
  name: 'john',
};

console.log(person.name);
person.age = 25;

console.log(person);

const items = {
  'featured-items': ['item1', 'item2'],
};

console.log(items['featured-items']);

let appState = 'loading';
const keyName = 'computer';

const app = {
  [appState]: true,
};

app[keyName] = 'apple';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

function upddateState(key, value) {
  state[key] = value;
}

upddateState('name', 'john');

console.log(state);
