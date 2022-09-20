"use strict";

function flipEveryNChars(input, n) {
  // your code here
  nA = [];
  len = input.length;
  separarCadena = input.split("");

  for (var i = 0; i < len / n; i++) {
    if (i == 0) {
      nA[i] = separarCadena.slice(0, n).reverse().join("");
    } else {
      nA[i] = separarCadena.slice(i * n, (i + 1) * n).reverse().join("");
    }
  }

  unirArr = nA.join("");
  return unirArr;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma