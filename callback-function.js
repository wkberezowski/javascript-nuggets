function makeUppercase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}
// makeUppercase('peter');

function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

// handleName('peter', makeUppercase);
// handleName('peter', reverseString);

handleName('susan', (value) => {
  console.log(value);
});

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('hello world');
});
