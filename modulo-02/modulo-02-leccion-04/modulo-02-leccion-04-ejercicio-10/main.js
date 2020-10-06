"use strict";

function box(borderbox, width, padding, border) {
  if (borderbox) {
    console.log(
      `El ancho del contenido es ${
        width - padding * 2 - border * 2
      } y el ancho total de la caja es ${width}`
    );
  } else {
    console.log(
      `El ancho del contenido es ${width} y el ancho total de la caja es ${
        width + padding * 2 + border * 2
      }`
    );
  }
}
