"use strict";

const button1 = document.querySelector(".button--1");
const button2 = document.querySelector(".button--2");
const button3 = document.querySelector(".button--3");

function buttonClick(event) {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle("button--change");
}

button1.addEventListener("click", buttonClick);
button2.addEventListener("click", buttonClick);
button3.addEventListener("click", buttonClick);
