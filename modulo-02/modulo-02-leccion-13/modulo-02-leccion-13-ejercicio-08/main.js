'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

//faster es el acumulador y runner cada uno de los elementos del array.
const getWinner = function (faster, runner) {
  if (runner.time < faster.time) {
    return runner.time;
  } else {
    return faster.time;
  }
};

const winner = runners.reduce(getWinner);
