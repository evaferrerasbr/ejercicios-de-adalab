"use strict";

function getTree(height) {
  let star = "";
  let line = "";
  let log = "";
  for (let i = 1; i <= 1; i++) {
    star = star += "★";
    console.log(star);
  }
  for (let i = 1; i <= height; i++) {
    line = line += "▲";
    console.log(line);
  }
  for (let i = 1; i <= 1; i++) {
    log = log += "|";
    console.log(log);
  }
}

getTree(5);
