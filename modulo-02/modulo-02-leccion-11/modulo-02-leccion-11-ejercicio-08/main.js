'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');
const characterInfo = [];
let savedSearch = '';

function getInfo() {
  list.innerHTML = '';
  let search = document.querySelector('.js-input').value;
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
  if (localStorage !== null) {
    console.log('entro en el localStorage');
    savedSearch = JSON.parse(localStorage.getItem('search'));
    console.log(savedSearch);
  }
}

getLocalStorage();

btn.addEventListener('click', getInfo);

// for (let i = 0; i < savedSearch.length; i++) {
//   if (characterInfo.include(search)) {
//     let liElement = `<li>Name: <span class="ligthText">${info[i].name}</span> Gender: <span class="ligthText">${info[i].gender}</span></li>`;
//     list.innerHTML += liElement;
//   } else {
//     searchInfo();
