'use strict';

const body = document.querySelector('body');
const newItem = document.createElement('div');
const content = document.createTextNode('Su sesión ha expirado');
newItem.appendChild(content);
newItem.classList.add('timeout');

function expireSession() {
  body.appendChild(newItem);
}

setTimeout(expireSession, 15000);
