"use strict";

function numberType(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEven = numberType(7);
console.log(isEven);
