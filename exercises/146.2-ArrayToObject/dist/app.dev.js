"use strict";

function fromListToObject(array) {
  // your code here
  var rv = {};

  for (var i = 0; i < array.length; i++) {
    rv[array[i][0]] = array[i][1];
  }

  return rv;
}

var output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log(ouput); // => { make: 'Ford', model: 'Mustang', year: 1964 }