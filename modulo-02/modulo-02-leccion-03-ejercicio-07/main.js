"use strict";

let ingredient = "Brócoli";

switch (ingredient) {
  case "Seitán":
    console.log(
      "Quieres cocinar con seitán. Te sugiero un filete vegano con patatas. "
    );
    break;
  case "Brócoli":
    console.log(
      "Quieres cocinar con brócoli. Puedes hervirlo con zanahoria y saltearlo con ajo y salsa de soja."
    );
    break;
  case "Espinacas":
    console.log(
      "Quieres cocinar con espinacas. Puedes rehogarlas con pasas y piñones."
    );
    break;
  default:
    console.log("¿No tienes nada en tu nevera? Puedes pedir una pizza.");
}
