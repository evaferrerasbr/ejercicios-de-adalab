"use strict";

const button = document.querySelector(".button");

function changeColor() {
  if (button.classList.contains("button--change")) {
    button.classList.remove("button--change");
  } else {
    button.classList.add("button--change");
  }
}

button.addEventListener("click", changeColor);
