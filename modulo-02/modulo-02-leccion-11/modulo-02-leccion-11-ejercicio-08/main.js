'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];
let savedSearch = [];
let search = '';
let results = '';

//esta función es la que se activa cuando la usuaria hace click en Buscar tras meter el término de búsqueda; si el término de búsqueda no está vacío llama a la función getLocalStorage() para consultar el local storage. En caso de esté vacío llama a la función getInfo() para buscar con el fetch, y si está lleno llama a getInfoFromLocal();
function handler() {
  console.log('entro en el handler porque hago clic');
  search = document.querySelector('.js-input').value;
  list.innerHTML = '';
  if (search !== '') {
    console.log('entro aquí porque la búsqueda no está vacía');
    const askLocalStorage = getLocalStorage();
    if (!askLocalStorage) {
      console.log('entro aquí porque no hay nada en el local storage');
      getInfo();
    } else {
      getInfoFromLocal();
    }
  }
}

//si es la primera vez que la usuaria visita la página, esta función hace una petición al servidor con la búsqueda de la usuaria (que guarda en la variable global search), guarda la información .results del json y llama a painData().
function getInfo() {
  fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      results = data.results;
      paintData();
    });
}

//esta función recorre results y por cada resultado que coincida con la búsqueda de la usuaria nos crea un elemento <li> que recoge la propiedad name y la propiedad gender.
function paintData() {
  console.log('te pinto los resultados en pantalla');
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
  console.log('te miro en el local storage');
  const stringInfo = localStorage.getItem('search');
  savedSearch = JSON.parse(stringInfo);
  if (savedSearch !== null) {
    return true;
  } else {
    return false;
  }
}

let marker = false;

//esta función pregunta si el local storage contiene el término de búsqueda (aunque falta perfilarlo para que no tenga case sensitivity). Gracias a la variable marker podemos preguntar si ha encontrado el término de búsqueda en los resultados del local storage. En caso de no haberlos encontrado, llamamos a la función que hace la petición al servidor.
function getInfoFromLocal() {
  console.log('el local storage no está vacío');
  for (let i = 0; i < savedSearch.length; i++) {
    let character = savedSearch[i].name;
    console.log(character);
    console.log(search);
    console.log(character.includes(search));
    if (character.includes(search)) {
      marker = true;
      console.log('entiendo la orden');
      let liElement = `<li>Name: <span class="ligthText">${savedSearch[i].name}</span> Gender: <span class="ligthText">${savedSearch[i].gender}</span></li>`;
      list.innerHTML += liElement;
    }
  }
  if (!marker) {
    getInfo();
  }
}

btn.addEventListener('click', handler);
