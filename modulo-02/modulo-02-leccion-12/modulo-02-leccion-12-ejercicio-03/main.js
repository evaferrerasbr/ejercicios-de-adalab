'use strict';

const select = document.querySelector('.select');
const img = document.createElement('img');
const imgContainer = document.querySelector('.imgContainer');

function showImg(event) {
  imgContainer.appendChild(img);
  if (event.target.value === 'madrid') {
    img.setAttribute(
      'src',
      'https://cadenaser00.epimg.net/ser/imagenes/2020/10/12/radio_madrid/1602511785_057130_1602518502_miniatura_normal.jpg'
    );
  }
  if (event.target.value === 'paris') {
    img.setAttribute(
      'src',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAUK--i47lSExiX2VcE-UaiZ0Vy_7ntwb3QA&usqp=CAU'
    );
  }
  if (event.target.value === 'ny') {
    img.setAttribute(
      'src',
      'https://album.mediaset.es/eimg/10000/2020/10/16/clipping_Kn8h8p_89f0.jpg?w=1024'
    );
  }
}

select.addEventListener('change', showImg);
