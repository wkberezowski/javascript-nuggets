const unique = new Set();
unique.add('first');
unique.add('second');
unique.add('third');
unique.add('first');
unique.add('first');

// const result = unique.delete('five');

const isValue = unique.has(4);
console.log(isValue);

console.log(unique);

const products = [
  {
    title: 'high-black bench',
    company: 'ikea',
  },
  {
    title: 'albany-table',
    company: 'macros',
  },
  {
    title: 'accent-chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

// const companies = products.map((item) => item.company);
// console.log(companies);
// const uniqueCompanies = new Set(companies);
// console.log(uniqueCompanies);

// const finalCompanies = ['all', ...uniqueCompanies];
// console.log(finalCompanies);

// THE ONE LINER

const result = ['all', ...new Set(products.map((item) => item.company))];
console.log(result);
