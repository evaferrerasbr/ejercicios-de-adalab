'use strict';

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

function createList() {
  const list = document.querySelector('.js-list');
  list.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    let className = '';
    let checked = '';
    if (tasks[i].completed === true) {
      className = 'crossout';
      checked = 'checked';
    } else {
      className = '';
      checked = '';
    }
    list.innerHTML += `<li class="${className}"><input type="checkbox" ${checked} class="js-list-check" id="${i}"><span>${tasks[i].name}</span>`;
  }
}

function changeCheck(event) {
  const selectedCheck = event.target.id;
  tasks[selectedCheck].completed = !tasks[selectedCheck].completed;
  createList();
  listenEvents();
}

function listenEvents() {
  const checkEl = document.querySelectorAll('.js-list-check');
  for (const checkItem of checkEl) {
    checkItem.addEventListener('change', changeCheck);
  }
}

createList();
listenEvents();
