'use strict';

const button = document.querySelector('.js-button');
const message = document.querySelector('.js-message');
let temp;

function showMessage() {
  message.innerHTML = '¿Te has dormido?';
}

temp = setTimeout(showMessage, 5000);

function handler() {
  message.innerHTML = '';
  temp = setTimeout(showMessage, 5000);
}

button.addEventListener('click', handler);
