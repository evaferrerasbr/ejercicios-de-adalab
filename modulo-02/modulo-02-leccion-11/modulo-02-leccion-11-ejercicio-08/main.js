'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];

function getInfo() {
  //esta función limpia la lista, coge el valor del input y si no es una búsqueda vacía da dos opciones: 1. buscar en el local storage si no está vacío y 2. hacer la petición al servidor si está vacío.
  list.innerHTML = '';
  let search = document.querySelector('.js-input').value;
  if (search !== '') {
    if (localStorage !== null) {
      getLocalStorage();
      console.log('entro en el localStorage');
    } else {
      console.log('voy al fetch');
      searchInfo();
    }
  }
}

function searchInfo() {
  let search = document.querySelector('.js-input').value;
  fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      let results = data.results;
      for (let j = 0; j < results.length; j++) {
        let liElement = `<li>Name: <span class="ligthText">${results[j].name}</span> Gender: <span class="ligthText">${results[j].gender}</span></li>`;
        list.innerHTML += liElement;
        const characterObject = {
          name: results[j].name,
          gender: results[j].gender,
        };
        characterInfo.push(characterObject);
      }
      localStorage.setItem('search', JSON.stringify(characterInfo));
      //¿Cómo hacer que no se me guarde más de una vez en el localStorage?
    });
}

function getLocalStorage() {
  //Al final de esta función llamo a searchInfo() para que, si no ha encontrado un término que encaje con la búsqueda, busque en el servidor.
  const info = JSON.parse(localStorage.getItem('search'));
  for (let i = 0; i < characterInfo.length; i++) {
    if (characterInfo.include(search)) {
      let liElement = `<li>Name: <span class="ligthText">${info[i].name}</span> Gender: <span class="ligthText">${info[i].gender}</span></li>`;
      list.innerHTML += liElement;
    } else {
      searchInfo();
    }
  }
}

btn.addEventListener('click', getInfo);
