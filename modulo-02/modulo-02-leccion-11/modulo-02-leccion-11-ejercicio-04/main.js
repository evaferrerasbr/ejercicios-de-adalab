"use strict";

const input = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

function saveInfo() {
  localStorage.setItem("name", input.value);
  text.innerHTML = input.value;
}

input.addEventListener("keyup", saveInfo);

function useInfo() {
  input.value = localStorage.getItem("name");
  text.innerHTML = localStorage.getItem("name");
}

useInfo();
