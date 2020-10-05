"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
  return element;
}

function numberType(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const num = getEl(".number").innerHTML;
const numValue = parseInt(num);
console.log("Este número es par: " + numberType(numValue));
