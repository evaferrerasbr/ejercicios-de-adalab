'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');

function getInfo() {
  list.innerHTML = '';
  let search = document.querySelector('.js-input').value;
  fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      let results = data.results;
      for (let j = 0; j < results.length; j++) {
        let characterName = results[j].name;
        let characterGender = results[j].gender;
        let liElement = `<li>Name: <span class="ligthText">${characterName}</span> Gender: <span class="ligthText">${characterGender}</span></li>`;
        list.innerHTML += liElement;
      }
    });
}

btn.addEventListener('click', getInfo);
