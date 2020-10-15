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
  let className = "";
  let checked = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].completed === true) {
      className = "crossout";
      checked = "checked";
    } else {
      className = "";
      checked = "";
    }
    listEl = `<li class="${className}">${arr[i].name}</li>`;
    let checkBox = `<input type="checkbox" ${checked}/>`;
    console.log(listEl);
    list.innerHTML = list.innerHTML + listEl + checkBox;
  }
}

createList(tasks);
