const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const {
  last: shakeAndBake,
  first,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(first, city, zip, shakeAndBake, favoriteSibling);

function printPerson({ first, last, city, siblings: { sister } }) {
  //   const { first, last } = person;
  console.log(first, last, sister);
}
printPerson(bob);
