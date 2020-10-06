"use strict";

const teacherIsra = document.querySelector(".teacher--isra");
const teacherTuerto = document.querySelector(".teacher--tuerto");
const teacherNasi = document.querySelector(".teacher--nasi");

function selectTeacher(event) {
  const selectedTeacher = event.currentTarget;
  selectedTeacher.classList.toggle("teacher--selected");
  const favorite = selectedTeacher.querySelector(".favorite");
  if (favorite.innerHTML === "Añadir") {
    favorite.innerHTML = "Quitar";
  } else {
    favorite.innerHTML = "Añadir";
  }
}

teacherIsra.addEventListener("click", selectTeacher);
teacherTuerto.addEventListener("click", selectTeacher);
teacherNasi.addEventListener("click", selectTeacher);
