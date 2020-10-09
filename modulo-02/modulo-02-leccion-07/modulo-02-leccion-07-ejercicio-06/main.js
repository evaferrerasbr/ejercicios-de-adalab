"use strict";

const moviesArray = [];
const favMovie1 = document.querySelector("#favouriteMovie");
const favMovie2 = document.querySelector("#favouriteMovie2");
const submitButton = document.querySelector(".submitButton");
const paragraph = document.querySelector(".paragraph");


function showFavMovie() {
  moviesArray[0] = favMovie1.value;
  moviesArray[1] = favMovie2.value;
  console.log(moviesArray);
  for (const movie of moviesArray) {
    console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`);
  }
}

submitButton.addEventListener("click", showFavMovie);
