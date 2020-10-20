'use strict';

const list = document.querySelector('.js-list');
const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const liEl = document.createElement('li');
  const liCont = document.createTextNode('Item' + numbers[i]);
  liEl.appendChild(liCont);
  list.appendChild(liEl);
}
