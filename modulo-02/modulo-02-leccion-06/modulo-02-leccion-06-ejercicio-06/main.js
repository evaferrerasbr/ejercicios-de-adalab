"use strict";

const pearBasket = {
  min: 0,
  max: 7,
  current: 4,
  initial: 1,
};

pearBasket.addPear = function () {
  if (pearBasket.current < 7) {
    pearBasket.current = pearBasket.current + 1;
    console.log(pearBasket.current);
  }
};

pearBasket.removePear = function () {
  if (pearBasket.current > 0) {
    pearBasket.current = pearBasket.current - 1;
    console.log(pearBasket.current);
  }
};

pearBasket.reset = function () {
  pearBasket.current = pearBasket.initial;
  console.log(pearBasket.current);
};
