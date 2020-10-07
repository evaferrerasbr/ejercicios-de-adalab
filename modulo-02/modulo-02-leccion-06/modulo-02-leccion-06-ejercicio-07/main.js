"use strict";

const job = "developer";
const user = {};

user.firstName = "Eva";
user.lastName = "Ferreras";
user.age = 28;
user.job = job;

user.firstName = "Eva María";
user.addYear = function () {
  user.age = user.age + 1;
};
