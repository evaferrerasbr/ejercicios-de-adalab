"use strict";

function getEl(selector) {
  return document.querySelector(selector);
}

const btnEl = getEl(".button--5");
console.log(btnEl);
