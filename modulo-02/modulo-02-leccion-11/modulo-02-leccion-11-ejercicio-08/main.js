'use strict';

const btn = document.querySelector('.js-button');
const list = document.querySelector('.js-list');

const characterSearch = [];

function getInfo() {
  list.innerHTML = '';
  let search = document.querySelector('.js-input').value;
  fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((data) => {
      let results = data.results;
      for (let j = 0; j < results.length; j++) {
        characterSearch.push(results[j]);
        let liElement = `<li>Name: <span class="ligthText">${results[j].name}</span> Gender: <span class="ligthText">${results[j].gender}</span></li>`;
        list.innerHTML += liElement;
      }
    });
  const savedSearch = localStorage.setItem(
    'search',
    JSON.stringify(characterSearch)
  );
}

btn.addEventListener('click', getInfo);

//function getFavoritesLocalStorage() {
// el array de favoritos tendrá lo que tenga el localStorage
//let favorites = JSON.parse(localStorage.getItem('favs'));
//if (favorites !== null) {
//return favorites;
//} else {
//  return (favorites = []);
//}
//}
