const products = [
  {
    title: 'Modern Poster',
  },
  {
    title: 'Bar Stool',
  },
  {
    title: 'Armchair',
  },
  {
    title: 'Leather Chair',
  },
];

const text = 'a';

const filteredProducts = products.filter((product) =>
  product.title.toLocaleLowerCase().includes(text)
);

console.log(filteredProducts);

// const firstName = 'john';

// const product = {
//   title: 'leather chair',
// };

// const result = product.title.includes('LE');
// console.log(result);
