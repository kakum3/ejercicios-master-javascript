"use strict";

function getAllKeys(obj) {
  // your code here
  var array = []; //tiene que estar aquí declarado, si se declara dentro del for sólo devuelve un resultado

  for (var keys in obj) {
    array.push(keys);
  }

  return array;
}