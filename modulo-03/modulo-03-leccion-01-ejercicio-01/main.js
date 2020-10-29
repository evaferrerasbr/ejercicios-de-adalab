'use strict';

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side * side;
  }
}

const testSquare = new Square();

console.log(testSquare.perimeter(9));
console.log(testSquare.area(9));
