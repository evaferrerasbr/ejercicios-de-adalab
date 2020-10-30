'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];
let savedSearch = [];
let search = '';
let results = '';
let marker = false;

function handler() {
  marker = false;
  search = document.querySelector('.js-input').value.toLowerCase();
  if (search !== '') {
    const askLocalStorage = getLocalStorage();
    if (!askLocalStorage) {
      getInfo();
    } else {
      getInfoFromLocal();
    }
  }
}

function getInfo() {
  fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      results = data.results;
      paintData();
    });
}

function paintData() {
  list.innerHTML = '';
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

function getLocalStorage() {
  const stringInfo = localStorage.getItem('search');
  savedSearch = JSON.parse(stringInfo);
  if (savedSearch !== null) {
    return true;
  } else {
    return false;
  }
}

function getInfoFromLocal() {
  for (let i = 0; i < savedSearch.length; i++) {
    let character = savedSearch[i].name.toLowerCase();
    console.log(character);
    console.log(search);
    console.log(character.includes(search));
    if (character.includes(search)) {
      marker = true;
      list.innerHTML = '';
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
