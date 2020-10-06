"use strict";

const paragraph = document.querySelector(".text");
const button = document.querySelector(".button");

function changeParagraph() {
  paragraph.innerHTML = "¡Ole yo y la madre que me parió!";
}

button.addEventListener("click", changeParagraph);
