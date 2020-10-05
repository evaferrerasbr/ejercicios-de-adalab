"use strict";

function hours(years) {
  const hoursLived = years * 8760;
  return hoursLived;
}
console.log(hours(60));
console.log(hours(7));
console.log(hours(84));
console.log(hours(28));
