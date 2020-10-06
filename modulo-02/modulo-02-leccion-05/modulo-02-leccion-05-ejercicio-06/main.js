"use strict";

const input = document.querySelector(".input");
const text = document.querySelector(".text");

function addText(event) {
  text.innerHTML = event.currentTarget.value;
}

input.addEventListener("change", addText);
