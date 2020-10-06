"use strict";

const container = document.querySelector(".container");

function changeColor(event) {
  if (event.key === "r") {
    container.classList.add("container--r");
  } else if (event.key === "p") {
    container.classList.add("container--p");
  }
}

document.addEventListener("keydown", changeColor);
