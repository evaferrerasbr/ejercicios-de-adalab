"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".button");

function printName() {
  const inputValue = input.value;
  console.log(`Hola ${inputValue}`);
}

button.addEventListener("click", printName);
