'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];
let savedSearch = [];
let search = '';
let results = undefined;

//esta función es la que se activa cuando la usuaria hace click en Buscar tras meter el término de búsqueda; me llama a la función getLocalStorage() y, en caso de que su return sea false, me llama a la función getInfo();
function handler() {
  list.innerHTML = '';
  console.log('entro en handler');
  const askLocalStorage = getLocalStorage();
  if (!askLocalStorage) {
    getInfo();
  }
}

function getLocalStorage() {
  console.log('consulto el localStorage');
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
  console.log('entro en getInfoFromLocal');
  search = document.querySelector('.js-input').value;
  for (let i = 0; i < savedSearch.length; i++) {
    if (savedSearch.includes(search)) {
      console.log(savedSearch);
    }
  }
}

function getInfo() {
  console.log('entro en getInfo para hacer el fetch');
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

function paintData() {
  console.log('entro en pintar');
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

btn.addEventListener('click', handler);

// for (let i = 0; i < savedSearch.length; i++) {
//   if (characterInfo.include(search)) {
//     let liElement = `<li>Name: <span class="ligthText">${info[i].name}</span> Gender: <span class="ligthText">${info[i].gender}</span></li>`;
//     list.innerHTML += liElement;
//   } else {
//     searchInfo();
