"use strict";

const titleElement = document.querySelector(".title");
const adalaberElement = document.querySelector(".list .list__item:first-child");
titleElement.innerHTML = titleElement.innerHTML + adalaberElement.textContent;
