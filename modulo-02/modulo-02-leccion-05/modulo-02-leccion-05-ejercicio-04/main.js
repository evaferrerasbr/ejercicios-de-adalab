"use strict";

const container = document.querySelector(".container");

function changeColor() {
  if (window.scrollY > 250) {
    console.log("hey");
    container.classList.add("container--scroll");
  }
}

window.addEventListener("scroll", changeColor);
