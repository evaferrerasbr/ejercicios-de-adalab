"use strict";

const button = document.querySelector(".button");

function logEvent(event) {
  console.log(event);
  console.log(event.type);
}

button.addEventListener("click", logEvent);
