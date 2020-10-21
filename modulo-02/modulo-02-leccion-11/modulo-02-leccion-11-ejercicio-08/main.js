'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];
let savedSearch = [];
let search = '';
let results = undefined;

//esta función es la que se activa cuando la usuaria hace click en Buscar tras meter el término de búsqueda; llama a la función getLocalStorage() y, en caso de que su return sea false, llama a la función getInfo();
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
      list.innerHTML = '';
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
    getInfoFromLocal();
    return true;
  } else {
    return false;
  }
}

//esta función pregunta si el local storage contiene el término de búsqueda (aunque falta perfilarlo para que no tenga case sensitivity). Falta que me pinte los elementos en pantalla, ya que entra por el if (imprime en pantalla el console.log de dentro) pero no pinta nada en la lista. Cuando está en el debugger sí lo pinta. También falta darle bien una orden alternativa al if para que se vaya a buscar la información al fetch si no está lo que queremos. Por ahora he intentado invocar a getInfo() y no funciona porque me multiplica la información del localstorage.
function getInfoFromLocal() {
  console.log('el local storage no está vacío');
  for (let i = 0; i < savedSearch.length; i++) {
    let character = savedSearch[i].name;
    console.log(character);
    console.log(search);
    console.log(character.includes(search));
    if (character.includes(search)) {
      console.log('entiendo la orden');
      let liElement = `<li>Name: <span class="ligthText">${savedSearch[i].name}</span> Gender: <span class="ligthText">${savedSearch[i].gender}</span></li>`;
      list.innerHTML += liElement;
    }
  }
}

btn.addEventListener('click', handler);
