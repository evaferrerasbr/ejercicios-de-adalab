'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];
let savedSearch = '';
let search = document.querySelector('.js-input').value;

function getInfo() {
  list.innerHTML = '';
  if (search !== '') {
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
      });
  }
}

function getLocalStorage() {
  if (localStorage.getItem('search') !== null) {
    console.log('entro en el localStorage');
    savedSearch = JSON.parse(localStorage.getItem('search'));
    console.log(savedSearch);
    getInfoFromLocal();
    return true;
  } else {
    return false;
  }
}

function getInfoFromLocal() {
  for (let i = 0; i < savedSearch.length; i++) {
    if (savedSearch.includes(search)) {
      console.log(savedSearch);
    }
  }
}

function handler() {
  debugger;
  const askLocalStorage = getLocalStorage();
  if (!askLocalStorage) {
    getInfo();
  }
}

btn.addEventListener('click', handler);

// for (let i = 0; i < savedSearch.length; i++) {
//   if (characterInfo.include(search)) {
//     let liElement = `<li>Name: <span class="ligthText">${info[i].name}</span> Gender: <span class="ligthText">${info[i].gender}</span></li>`;
//     list.innerHTML += liElement;
//   } else {
//     searchInfo();
