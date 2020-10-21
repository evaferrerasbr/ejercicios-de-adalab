'use strict';

const paragraph = document.querySelector('.time');
const stopButton = document.querySelector('.stop');
const continueButton = document.querySelector('.continue');

let counter = 0;

function increaseCounter() {
  counter++;
  showCounter();
}

function showCounter() {
  paragraph.innerHTML = counter;
}

let time = setInterval(increaseCounter, 1000);

function stopCounting() {
  clearInterval(time);
}

function continueCounting() {
  time = setInterval(increaseCounter, 1000);
  return time;
}

stopButton.addEventListener('click', stopCounting);
continueButton.addEventListener('click', continueCounting);
