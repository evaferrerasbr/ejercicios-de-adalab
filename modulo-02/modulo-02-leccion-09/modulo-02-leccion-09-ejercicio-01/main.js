"use strict";

const arrNumbers = [];

function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    arrNumbers.push(i);
  }
  return arrNumbers;
}

get100Numbers();
console.log(arrNumbers);
