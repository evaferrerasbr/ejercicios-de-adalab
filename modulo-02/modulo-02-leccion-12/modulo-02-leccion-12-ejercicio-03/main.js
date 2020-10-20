'use strict';

const users = [
  {
    name: 'Homer',
    surname: 'Simpson',
    email: 'blabla@gmail.com',
  },
  {
    name: 'Lisa',
    surname: 'Simpson',
    email: 'blibli@gmail.com',
  },
  {
    name: 'Marge',
    surname: 'Simpson',
    email: 'blublu@gmail.com',
  },
];

const select = document.querySelector('.select');
const input = document.querySelectorAll('.input');

function getUser(event) {
  if (event.target.value === 'user-1') {
    input[0].value = users[0].name;
    input[1].value = users[0].surname;
    input[2].value = users[0].email;
  }
  if (event.target.value === 'user-2') {
    input[0].value = users[1].name;
    input[1].value = users[1].surname;
    input[2].value = users[1].email;
  }
  if (event.target.value === 'user-3') {
    input[0].value = users[2].name;
    input[1].value = users[2].surname;
    input[2].value = users[2].email;
  }
}

select.addEventListener('change', getUser);
