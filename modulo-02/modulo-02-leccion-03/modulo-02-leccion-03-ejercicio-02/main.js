"use strict";

function name(name) {
  const myName = "Eva";
  const herName = "Teresa";
  if (name === myName || name === herName) {
    console.log(`Bienvenida, ${name}.`);
  } else {
    console.log("Lo siento, el usuario que has introducido no está registrado");
  }
}

name("Eva");
name("Teresa");
name("Adela");
