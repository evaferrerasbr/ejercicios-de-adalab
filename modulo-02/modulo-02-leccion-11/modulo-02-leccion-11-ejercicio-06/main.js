"use strict";

const form = document.querySelector(".js-form");

const user = {
  name: "",
  surname: "",
};

function saveInfo(event) {
  user[event.target.id] = event.target.value;
  localStorage.setItem("user", JSON.stringify(user));
}

form.addEventListener("keyup", saveInfo);

function useInfo() {
  let inputName = document.querySelector(".js-name");
  let inputSurname = document.querySelector(".js-surname");
  const userInfo = JSON.parse(localStorage.getItem("user"));
  inputName.value = userInfo.name;
  inputSurname.value = userInfo.surname;
}

useInfo();
