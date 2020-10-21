'use strict';

let counter = 0;

function increaseCounter() {
  counter++;
  showCounter();
}

function showCounter() {
  const time = document.querySelector('.time');
  time.innerHTML = counter;
}

setInterval(increaseCounter, 2000);
