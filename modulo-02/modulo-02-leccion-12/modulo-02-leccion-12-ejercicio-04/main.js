'use strict';

const paragraphs = document.querySelectorAll('.text');

for (let i = 0; i < paragraphs.length; i++) {
  let parHeight = paragraphs[i].offsetHeight;
  let newHeight = parHeight / 3;
  paragraphs[i].style.height = `${newHeight}px`;
}
