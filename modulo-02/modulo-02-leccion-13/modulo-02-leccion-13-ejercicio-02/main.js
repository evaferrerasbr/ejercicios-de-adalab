'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];
const welcome = users.map((user) => {
  console.log(user);
  if (user.isPremium) {
    user.name = `¡Bienvenida, ${user.name}, gracias por confiar en nosotros.`;
  } else {
    user.name = `¡Bienvenida, ${user.name}.`;
  }
  return user;
});

console.log(welcome);
