"use strict";

const moviesArray = [];
const favMovie1 = document.querySelector("#favouriteMovie");
const favMovie2 = document.querySelector("#favouriteMovie2");
const submitButton = document.querySelector(".submitButton");
const paragraph = document.querySelector(".paragraph");


function saveFavMovie(event) {
  const movie = event.currentTarget.value;
  console.log(movie);
}

favMovie1.addEventListener("blur", saveFavMovie);
favMovie2.addEventListener("blur", saveFavMovie);
// submitButton.addEventListener("click", showFavMovie);
