const heading = document.querySelector('.heading');

const listItems = document.querySelectorAll('.list-item');

const getElement = (selector, isList) => {
  const el = isList
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  if ((!isList && el) || (isList && !el.length < 1)) return el;
  throw new Error(`Please double check selector ${selector}`);
};

console.log(getElement('.headin'));
