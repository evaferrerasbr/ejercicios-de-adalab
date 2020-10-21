'use strict';

let counter = 0;

function increaseCounter() {
  counter++;
  showCounter();
}

function showCounter() {
  const time = document.querySelector('.time');
  if (counter <= 12) {
    time.innerHTML = counter;
  } else {
    time.innerHTML = '¡Feliz año nuevo!';
  }
}

setInterval(increaseCounter, 1000);
