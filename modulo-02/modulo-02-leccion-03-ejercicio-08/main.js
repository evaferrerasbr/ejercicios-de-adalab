"use strict";

let year = 2020;

if (year % 4 === 0) {
  console.log("¡Estás en un año bisiesto!");
} else if ((year + 1) % 4 === 0) {
  console.log(`El siguiente año bisiesto será ${year + 1}`);
} else if ((year + 2) % 4 === 0) {
  console.log(`El siguiente año bisiesto será ${year + 2}`);
} else if ((year + 3) % 4 === 0) {
  console.log(`El siguiente año bisiesto será ${year + 3}`);
}
