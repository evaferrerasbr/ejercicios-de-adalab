"use strict";

// function characters(name) {
//   console.log(
//     `El nombre de mi compañera es ${name} y tiene ${
//       name.length - 2
//     } caracteres.`
//   );
// }

// const myName = "Eva Ferreras Bracho";

// characters(myName);

const name = "Eva";
const firstSurname = "Ferreras";
const secondSurname = "Bracho";
console.log(
  `El nombre de mi compañera es ${
    name + " " + firstSurname + " " + secondSurname
  } y tiene ${
    name.length + firstSurname.length + secondSurname.length
  } caracteres.`
);
