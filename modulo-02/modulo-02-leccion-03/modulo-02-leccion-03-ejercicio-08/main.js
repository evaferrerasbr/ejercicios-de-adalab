"use strict";

const year = 2024;

if (year % 4 === 0) {
  console.log("¡Estás en un año bisiesto!");
} else if (year % 4 === 1) {
  console.log(`El siguiente año bisiesto será ${year + 3}`);
} else if (year % 4 === 2) {
  console.log(`El siguiente año bisiesto será ${year + 2}`);
} else if (year % 4 === 3) {
  console.log(`El siguiente año bisiesto será ${year + 1}`);
}

// function year(year) {
//   if (year % 4 === 0) {
//     console.log("¡Estás en un año bisiesto!");
//   } else if ((year + 1) % 4 === 0) {
//     console.log(`El siguiente año bisiesto será ${year + 1}`);
//   } else if ((year + 2) % 4 === 0) {
//     console.log(`El siguiente año bisiesto será ${year + 2}`);
//   } else if ((year + 3) % 4 === 0) {
//     console.log(`El siguiente año bisiesto será ${year + 3}`);
//   }
// }

// year(2020);
// year(2029);
// year(3);
