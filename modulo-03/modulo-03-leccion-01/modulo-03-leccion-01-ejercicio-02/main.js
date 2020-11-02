'use strict';

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    return this.side * 4;
  }
  area() {
    return Math.pow(this.side, 2);
  }
}

const square1 = new Square(1);

console.log(square1.perimeter());
console.log(square1.area());

const square3 = new Square(3);

console.log(square3.perimeter());
console.log(square3.area());

const square7 = new Square(7);

console.log(square7.perimeter());
console.log(square7.area());
