'use strict';

const body = document.querySelector('.body');
const form = document.querySelector('.js-form');

let themes = {
  light: false,
  dark: false,
};

let savedTheme;

function selectOption(event) {
  body.classList.remove('theme-1');
  body.classList.remove('theme-2');
  if (event.target.value === 'theme-1') {
    themes.light = true;
    themes.dark = false;
  }
  if (event.target === 'theme-2') {
    themes.light = false;
    themes.dark = true;
  }
  changeTheme();
}

function changeTheme() {
  if (themes.light) {
    body.classList.add('theme-1');
  }
  if (themes.dark) {
    body.classList.add('theme-2');
  }
}

function setLocalStorage() {
  const setStringData = JSON.stringify(themes);
  localStorage.setItem('themes', setStringData);
}

function getLocalStorage() {
  const getStringData = localStorage.getItem('themes');
  savedTheme = JSON.parse(getStringData);
  if (savedTheme !== null) {
    themes = savedTheme;
    changeTheme();
  }
}

getLocalStorage();

form.addEventListener('click', selectOption);
