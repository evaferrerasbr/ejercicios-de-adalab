'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const welcome = users.map((user) => {
  if (user.isPremium) {
    return `¡Bienvenida, ${user.name}, gracias por confiar en nosotros.`;
  } else {
    return `¡Bienvenida, ${user.name}.`;
  }
});

console.log(welcome);
