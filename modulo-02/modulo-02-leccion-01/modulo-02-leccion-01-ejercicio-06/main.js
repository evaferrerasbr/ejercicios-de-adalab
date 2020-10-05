"use strict";

const containerElement = document.querySelector(".container");
const titleElement = "<h1>Lorem ipsum</h1>";
const imageElement =
  '<img src="http://via.placeholder.com/350x150" title="Image title" alt="Image alt"/>';
const contentElement =
  "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit<p>";

containerElement.innerHTML = titleElement + imageElement + contentElement;
