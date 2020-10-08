"use strict";

const options = ["coche", "viaje", "crucero", "llavero"];
const lotteryNumberInput = document.querySelector("#lotteryNumber");
console.log(lotteryNumberInput);

function handleLotteryNumberChange(event) {
  // const input = event.currentTarget;
  // console.log(input);
  const selectedNumber = parseInt(lotteryNumberInput.value);
  console.log(selectedNumber);
  const ind = selectedNumber - 1; // El índice empieza en 0
  console.log(ind);
  const result = options[ind]; // Utilizamos una constante que contiene un número como valor
  console.log("Premio: ", result);
}

lotteryNumberInput.addEventListener("keyup", handleLotteryNumberChange);
