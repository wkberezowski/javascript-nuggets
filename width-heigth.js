console.log('width', window.innerWidth);
console.log('heigth', window.innerHeight);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', () => {
  const dimensions = box.getBoundingClientRect();
  console.log(dimensions);
});
