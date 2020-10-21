'use strict';

const paragraph = document.querySelector('.time');

let counter = 0;

function increaseCounter() {
  counter++;
  showCounter();
}

function showCounter() {
  console.log(time);
  if (counter <= 12) {
    paragraph.innerHTML = counter;
  } else {
    clearInterval(time);
    paragraph.innerHTML = '¡Feliz año nuevo!';
  }
}

const time = setInterval(increaseCounter, 1000);
