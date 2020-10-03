"use strict";

const firstYear = 15;
const secondYear = 9;
const thirdYear = 5;

let years = 9;

if (years <= 1) {
  console.log(`La perreta tiene ${firstYear} años humanos.`);
} else if (years <= 2) {
  console.log(`La perreta tiene ${firstYear + secondYear} años humanos.`);
} else {
  console.log(
    `La perreta tiene ${
      firstYear + secondYear + years * thirdYear
    } años humanos.`
  );
}
