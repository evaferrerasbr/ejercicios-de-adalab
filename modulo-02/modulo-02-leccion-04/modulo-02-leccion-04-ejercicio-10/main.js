"use strict";

function box(borderbox, width, padding, border) {
  if (borderbox === true) {
    console.log(
      `El ancho del contenido es ${
        width - padding - border
      } y el ancho total de la caja es ${width}`
    );
  } else {
    console.log(
      `El ancho del contenido es ${width} y el ancho total de la caja es ${
        width + padding + border
      }`
    );
  }
}
