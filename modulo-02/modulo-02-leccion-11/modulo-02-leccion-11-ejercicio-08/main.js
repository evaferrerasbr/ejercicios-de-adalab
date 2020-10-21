'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];
let savedSearch = [];
let search = '';
let results = undefined;

//esta función es la que se activa cuando la usuaria hace click en Buscar tras meter el término de búsqueda; llama a la función getLocalStorage() y, en caso de que su return sea false, llama a la función getInfo();
function handler() {
  console.log('entro');
  list.innerHTML = '';
  const askLocalStorage = getLocalStorage();
  if (!askLocalStorage) {
    getInfo();
  }
}

//si es la primera vez que la usuaria visita la página, esta función hace una petición al servidor con la búsqueda de la usuaria (que guarda en la variable global search), guarda la información .results del json y llama a painData().
function getInfo() {
  list.innerHTML = '';
  search = document.querySelector('.js-input').value;
  if (search !== '') {
    console.log('entro en el if porque no estoy vacío');
    fetch(`https://swapi.dev/api/people/?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        results = data.results;
        console.log('estoy al final de getInfo');
        paintData();
      });
  }
}

//esta función recorre results y por cada resultado que coincida con la búsqueda de la usuaria nos crea un elemento <li> que recoge la propiedad name y la propiedad gender.
function paintData() {
  for (let j = 0; j < results.length; j++) {
    let liElement = `<li>Name: <span class="ligthText">${results[j].name}</span> Gender: <span class="ligthText">${results[j].gender}</span></li>`;
    list.innerHTML += liElement;
    const characterObject = {
      name: results[j].name,
      gender: results[j].gender,
    };
    characterInfo.push(characterObject);
  }
  const stringData = JSON.stringify(characterInfo);
  localStorage.setItem('search', stringData);
}

//la función local storage busca en el almacenamiento (que, si no es la primera vez que entra, estará lleno) y guarda en la variable global savedSearch lo que hubiésemos guardado.
function getLocalStorage() {
  const stringInfo = localStorage.getItem('search');
  savedSearch = JSON.parse(stringInfo);
  if (savedSearch !== null) {
    getInfoFromLocal();
    return true;
  } else {
    return false;
  }
}

function getInfoFromLocal() {
  for (let i = 0; i < savedSearch.length; i++) {
    if (savedSearch[i].name.includes(search)) {
      let liElement = `<li>Name: <span class="ligthText">${savedSearch[i].name}</span> Gender: <span class="ligthText">${savedSearch[i].gender}</span></li>`;
      list.innerHTML += liElement;
    } else {
      getInfo();
    }
  }
}

btn.addEventListener('click', handler);
