'use strict';

let secondsCounter = 0;
const time = document.querySelector('.time');
time.innerHTML = `Escrito hace ${secondsCounter} segundos`;

function increaseCounter() {
  secondsCounter++;
  showCounter();
}

function showCounter() {
  if (secondsCounter < 5) {
    time.innerHTML = `Escrito hace ${secondsCounter} segundos`;
  } else if ((secondsCounter) => 5 && secondsCounter <= 10) {
    time.innerHTML = `Escrito hace 1 minuto`;
  } else {
    time.innerHTML = `Escrito hace ${Math.floor(secondsCounter / 60)} minutos`;
  }
}

setInterval(increaseCounter, 1000);
