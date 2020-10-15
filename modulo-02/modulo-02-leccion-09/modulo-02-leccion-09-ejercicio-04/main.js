"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

const list = document.querySelector(".js-list");

function createList(arr) {
  let listEl = "";
  for (let i = 0; i < arr.length; i++) {
    listEl = `<li>${arr[i].name}</li>`;
    console.log(listEl);
    list.innerHTML = list.innerHTML + listEl;
    if (arr[i].completed) {
      console.log("Tarea completada");
      console.log(listEl);
      listEl.classList.add(".crossout");
    }
  }
}

createList(tasks);
