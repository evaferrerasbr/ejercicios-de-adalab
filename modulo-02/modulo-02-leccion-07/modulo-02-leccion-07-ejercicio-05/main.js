"use strict";

function average(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  let average = total / array.length;
  console.log(`La media es ${average}`);
}

average([10, 10, 10, 10, 10]);
average([20, 20, 20, 20, 20]);
average([2, 2, 2, 2, 2]);
