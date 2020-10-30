'use strict';

const container = document.querySelector('.js-result');

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

const list = document.createElement('ul');
container.appendChild(list);

//3
function paint3() {
  list.innerHTML = '';
  for (let i = 0; i < promos.length; i++) {
    const liElement = document.createElement('li');
    const nameElement = document.createElement('p');
    const promoElement = document.createElement('p');
    const studentsElement = document.createElement('p');
    const nameContent = document.createTextNode(promos[i].promo);
    const promoContent = document.createTextNode(promos[i].name);
    const studentsContent = document.createTextNode(
      `Número de alumnas: ${promos[i].students.length}`
    );
    list.appendChild(liElement);
    liElement.appendChild(nameElement);
    liElement.appendChild(promoElement);
    liElement.appendChild(studentsElement);
    nameElement.appendChild(nameContent);
    promoElement.appendChild(promoContent);
    studentsElement.appendChild(studentsContent);
  }
}

//4
function paint4() {
  list.innerHTML = '';
  for (let i = 0; i < promos.length; i++) {
    const liElement = document.createElement('li');
    const paragraphElement = document.createElement('p');
    const sublistElement = document.createElement('ul');
    const paragraphContent = document.createTextNode(
      `Nombre: ${promos[i].name}`
    );
    list.appendChild(liElement);
    liElement.appendChild(paragraphElement);
    paragraphElement.appendChild(paragraphContent);
    liElement.appendChild(sublistElement);
    for (let j = 0; j < promos[i].students.length; j++) {
      const studentElement = document.createElement('li');
      const studentContent = document.createTextNode(
        `${promos[i].students[j].name}, ${promos[i].students[j].age}`
      );
      sublistElement.appendChild(studentElement);
      studentElement.appendChild(studentContent);
    }
  }
}

//5
function paint5() {
  let counter = 1;
  list.innerHTML = '';
  for (let i = 0; i < promos.length; i++) {
    const liElement = document.createElement('li');
    const paragraphElement = document.createElement('p');
    const sublistElement = document.createElement('ul');
    const paragraphContent = document.createTextNode(
      `Nombre: ${promos[i].name}`
    );
    list.appendChild(liElement);
    liElement.appendChild(paragraphElement);
    paragraphElement.appendChild(paragraphContent);
    liElement.appendChild(sublistElement);
    for (let j = 0; j < promos[i].students.length; j++) {
      const studentElement = document.createElement('li');
      const studentContent = document.createTextNode(
        `${promos[i].students[j].name}, ${promos[i].students[j].age}`
      );
      studentElement.setAttribute('id', `id-${[counter]}`);
      sublistElement.appendChild(studentElement);
      studentElement.appendChild(studentContent);
      counter = counter + 1;
    }
  }
}

//6
function paint6() {
  let counter = 1;
  list.innerHTML = '';
  for (let i = 0; i < promos.length; i++) {
    const liElement = document.createElement('li');
    const paragraphElement = document.createElement('p');
    const sublistElement = document.createElement('ul');
    const paragraphContent = document.createTextNode(
      `Nombre: ${promos[i].name}`
    );
    list.appendChild(liElement);
    liElement.appendChild(paragraphElement);
    paragraphElement.appendChild(paragraphContent);
    liElement.appendChild(sublistElement);
    for (let j = 0; j < promos[i].students.length; j++) {
      const studentElement = document.createElement('li');
      const studentContent = document.createTextNode(
        `${promos[i].students[j].name}, ${promos[i].students[j].age}`
      );
      studentElement.setAttribute('id', `id-${[counter]}`);
      counter = counter + 1;
      if (promos[i].students[j].age % 2 === 0) {
        sublistElement.appendChild(studentElement);
        studentElement.appendChild(studentContent);
      }
    }
  }
}

//7
function paint7() {
  let counter = 1;
  list.innerHTML = '';
  for (let i = 0; i < promos.length; i++) {
    const liElement = document.createElement('li');
    const paragraphElement = document.createElement('p');
    const sublistElement = document.createElement('ul');
    const paragraphContent = document.createTextNode(
      `Nombre: ${promos[i].name}`
    );
    list.appendChild(liElement);
    liElement.appendChild(paragraphElement);
    paragraphElement.appendChild(paragraphContent);
    liElement.appendChild(sublistElement);
    for (let j = 0; j < promos[i].students.length; j++) {
      const studentElement = document.createElement('li');
      const studentContent = document.createTextNode(
        `${promos[i].students[j].name}, ${promos[i].students[j].age}`
      );
      studentElement.setAttribute('id', `id-${[counter]}`);
      counter = counter + 1;
      for (let k = 0; k < studentsWorkingInGoogle.length; k++) {
        if (studentsWorkingInGoogle[k] === studentElement.id) {
          sublistElement.appendChild(studentElement);
          studentElement.appendChild(studentContent);
        }
      }
    }
  }
}

//8
paint5();

function getId(event) {
  console.log(event.target.id);
}

container.addEventListener('click', getId);
