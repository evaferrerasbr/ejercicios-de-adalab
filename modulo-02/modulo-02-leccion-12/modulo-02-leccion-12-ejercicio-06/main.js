'use strict';

const container = document.querySelector('.js-container');
const colorsArray = ['Blanco', 'Azul', 'Rojo', 'Verde', 'Amarillo', 'Rosa'];

for (let i = 0; i <= 100; i++) {
  const paragraphElement = document.createElement('p');
  const paragraphContent = document.createTextNode(
    'He aprendido bien cómo funcionan los bucles'
  );
  const select = document.createElement('select');
  paragraphElement.classList.add('js-paragraphs');
  paragraphElement.setAttribute('id', [i]);
  select.setAttribute('data-id', [i]);
  select.classList.add('js-select');
  for (let j = 0; j < colorsArray.length; j++) {
    const option = document.createElement('option');
    option.value = colorsArray[j];
    option.text = colorsArray[j];
    select.appendChild(option);
  }
  container.appendChild(paragraphElement);
  paragraphElement.appendChild(paragraphContent);
  paragraphElement.appendChild(select);
}

function changeColor(event) {
  const par = document.querySelectorAll('.js-paragraphs');
  for (let i = 0; i < par.length; i++) {
    if (par[i].id === event.target.dataset.id) {
      par[i].classList.remove('yellow');
      par[i].classList.remove('white');
      par[i].classList.remove('blue');
      par[i].classList.remove('red');
      par[i].classList.remove('blue');
      if (event.target.value === 'Amarillo') {
        par[i].classList.add('yellow');
      } else if (event.target.value === 'Azul') {
        par[i].classList.add('blue');
      } else if (event.target.value === 'Verde') {
        par[i].classList.add('green');
      } else if (event.target.value === 'Rojo') {
        par[i].classList.add('red');
      } else if (event.target.value === 'Rosa') {
        par[i].classList.add('pink');
      }
    }
  }
}

const selectArray = document.querySelectorAll('.js-select');
for (const selectItem of selectArray) {
  selectItem.addEventListener('change', changeColor);
}
