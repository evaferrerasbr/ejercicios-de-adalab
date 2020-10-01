"use strict";

const userAge = document.querySelector(".user-age");
console.log(userAge.innerHTML);
const hoursLived = parseInt(userAge.innerHTML) * 8760;
console.log(hoursLived);
