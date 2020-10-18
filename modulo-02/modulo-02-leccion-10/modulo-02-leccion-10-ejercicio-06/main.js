'use strict';

const dogs = [];

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/list')
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breeds = breedsData.message;
      for (let i = 0; i < breeds.length; i++) {
        dogs.push(breeds[i]);
      }
      return fetch(`https://api.rand.fun/number/integer?max=${dogs.length}`);
    })
    .then((randomResponse) => randomResponse.json())
    .then((randomData) => {
      const randomBreed = randomData.result;
      console.log(randomBreed);
      document.querySelector('.js-text').innerHTML = dogs[randomBreed];
      return fetch(
        `https://dog.ceo/api/breed/${dogs[randomBreed]}/images/random`
      );
    })
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      const img = document.querySelector('.js-image');
      img.src = imageData.message;
      img.alt = 'Un perrete';
    });
}
document.querySelector('.js-button').addEventListener('click', getRandomDog);
