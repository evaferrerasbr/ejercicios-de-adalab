'use strict';

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/list')
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breedsLegth = breedsData.message;
      const randomMax = breedsLegth.length;
      console.log(randomMax);
      return fetch(`https://rand.fun/integer?max=${randomMax}`);
    })
    .then((randomResponse) => randomResponse.json())
    .then((randomData) => {
      const randomBreed = breedsData[randomData.result];
      document.querySelector('.js-text').innerHTML = randomBreed;
      return fetch(`https://dog.ceo/api/breed/${randomBreed}/images/random`);
    })
    .then((imageResponse) => imageResponse.json())
    .then((imageData) => {
      const img = document.querySelector('.js-img');
      img.src = imageData.message;
      img.alt = 'Un perrete';
    });
}
document.querySelector('.js-button').addEventListener('click', getRandomDog);
