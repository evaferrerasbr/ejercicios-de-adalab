"use strict";

const messageElement = document.querySelector(".message");
const messageTitle = document.querySelector(".message--title");
const messageText = document.querySelector(".message--text");

if (messageElement.classList.contains("warning")) {
  messageTitle.innerHTML = "Aviso";
  messageText.innerHTML = "Tenga cuidado";
} else if (messageElement.classList.contains("error")) {
  messageTitle.innerHTML = "Error";
  messageText.innerHTML = "Ha surgido un error";
} else if (messageElement.classList.contains("success")) {
  messageTitle.innerHTML = "Correcto";
  messageText.innerHTML = "Los datos son correctos";
}
