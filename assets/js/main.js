// loads the jquery package from node_modules
const $ = require('jquery');
require('bootstrap-sass');
const assets = require("./assets.js");

// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
const greet = require('./modules/greet');


$(document).ready(() => {
  $('h1').html(greet('john'));
  $('[data-toggle="tooltip"]').tooltip();
  
  //test babel
  console.log([1,2,3].map(n => n + 1));
});