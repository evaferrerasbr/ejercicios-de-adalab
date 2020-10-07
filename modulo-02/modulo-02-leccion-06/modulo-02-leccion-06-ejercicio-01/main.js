"use strict";

const adalaber1 = {
  name: "Susana",
  age: 35,
  job: "periodista",
};

const adalaber2 = {
  name: "Rocío",
  age: 25,
  job: "actriz",
};

const textEl = document.querySelector(".js--text-1");
const textEl2 = document.querySelector(".js--text-2");

textEl.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;
textEl2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;
