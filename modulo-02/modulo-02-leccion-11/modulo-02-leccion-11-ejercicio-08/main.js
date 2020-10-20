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
      //¿Cómo puedo hacer para que, si mi búsqueda no coincide con ningún término guardado en localStorage, me vaya al fetch?
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
  const info = JSON.parse(localStorage.getItem('search'));
  const index = characterInfo.indexOf(search);
  let liElement = `<li>Name: <span class="ligthText">${info[index].name}</span> Gender: <span class="ligthText">${info[index].gender}</span></li>`;
  list.innerHTML += liElement;
}

btn.addEventListener('click', getInfo);
