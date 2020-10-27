'use strict';

const body = document.querySelector('.body');
const form = document.querySelector('.js-form');

let themes = {
  light: false,
  dark: false,
};

let savedTheme;

function selectOption(event) {
  console.log('estoy entrando');
  body.classList.remove('theme-1');
  body.classList.remove('theme-2');
  if (event.target.value === 'theme-1') {
    console.log(event.target.value);
    themes.light = true;
    themes.dark = false;
  }
  if (event.target.value === 'theme-2') {
    console.log(event.target.value);
    themes.light = false;
    themes.dark = true;
  }
  changeTheme();
  setLocalStorage();
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
  } else {
    themes.light = false;
    themes.dark = false;
  }
}

getLocalStorage();

form.addEventListener('click', selectOption);
