"use strict";

function priceIva(price) {
  const iva = price * 0.21;
  const total = price + iva;
  console.log(`Precio sin IVA: ${price}; IVA: ${iva}; Total: ${total}`);
}

let totalPrice = priceIva(100);
