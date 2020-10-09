"use strict";

const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'Diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'Ingeniera química'
  },
  {
    name: 'Susana',
    age: 34,
    job: 'Periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'Actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'Diseñadora'
  }
];

function countAdalabers(array) {
  const totalAdalabers = array.length;
  console.log(totalAdalabers);
  return totalAdalabers;
}

countAdalabers(adalabers);

function average(array) {
let total = 0;
for (let i = 0; i < array.length; i++) {
  total = total + array[i].age;
}
let av = total / array.length;
console.log(av);
return av;
}

average(adalabers);

function theYoungest(array) {
  let minAge = array[0].age;
  for (let i = 0; i < array.length; i++) {
    if (array[i].age < minAge) {
      minAge = array[i].age;
      console.log(`La adalaber más joven es ${array[i].name}`);
    }
  }
}

theYoungest(adalabers);

function countDesigners(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].job === "Diseñadora") {
      total = total + 1;
      console.log(`Hay ${total} adalabers diseñadoras`);
    }
  } 
}

countDesigners(adalabers);