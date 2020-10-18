'use strict';

const body = document.querySelector('.body');
const form = document.querySelector('.js-form');

let themes = {};

function changeTheme() {
  if (themes.light === true) {
    body.classList.add('theme-1');
  }
  if (themes.dark === true) {
    body.classList.add('theme-2');
  }
}

function selectOption(event) {
  body.classList.remove('theme-1');
  body.classList.remove('theme-2');
  if (event.target.value === 'theme-1') {
    themes.light = true;
    themes.dark = false;
  }
  if (event.target.value === 'theme-2') {
    themes.light = false;
    themes.dark = true;
  }
  changeTheme();
  localStorage.setItem('themes', JSON.stringify(themes));
}

function saveTheme() {
  const savedTheme = JSON.parse(localStorage.getItem('themes'));
  themes = savedTheme;
  changeTheme();
}

saveTheme();

form.addEventListener('click', selectOption);
