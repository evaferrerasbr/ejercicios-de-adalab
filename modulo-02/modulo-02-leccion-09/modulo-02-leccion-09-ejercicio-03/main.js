"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

function selectLostNumbers(arr) {
  const evenLostNumbers = [];
  const multipleLostNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenLostNumbers.push(arr[i]);
    } else if (arr[i] % 3 === 0) {
      multipleLostNumbers.push(arr[i]);
    }
  }
  const arrConcat = evenLostNumbers.concat(multipleLostNumbers);
  console.log(arrConcat);
  return arrConcat;
}

selectLostNumbers(lostNumbers);
