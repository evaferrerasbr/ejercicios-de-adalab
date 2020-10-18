"use strict";

const body = document.querySelector(".body");
const form = document.querySelector(".js-form");

let themes = {};

changeTheme();

function changeTheme() {
  if (themes.light === true) {
    body.classList.add("theme-1");
    body.classList.remove("theme-2");
  }
  if (themes.dark === true) {
    body.classList.add("theme-2");
    body.classList.remove("theme-1");
  }
}

function selectOption(event) {
  if (event.target.value === "theme-1") {
    themes.light = true;
    themes.dark = false;
  }
  if (event.target.value === "theme-2") {
    themes.light = false;
    themes.dark = true;
  }
  changeTheme();
  localStorage.setItem("themes", JSON.stringify(themes));
  return themes;
}

function saveTheme() {
  const savedTheme = localStorage.getItem("themes");
  JSON.parse(savedTheme);
  changeTheme();
}

saveTheme();

form.addEventListener("click", selectOption);
