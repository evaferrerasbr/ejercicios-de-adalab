"use strict";

const userAge = document.querySelector(".user-age");
console.log(userAge.innerHTML);
const yearHours = 8760;
const hoursLived = parseInt(userAge.innerHTML) * yearHours;
console.log(hoursLived);
