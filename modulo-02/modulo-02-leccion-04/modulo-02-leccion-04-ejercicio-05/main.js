"use strict";

function getEl(selector) {
  return document.querySelector(selector);
}

const btnEl = getEl(".button--3");
console.log(btnEl);
