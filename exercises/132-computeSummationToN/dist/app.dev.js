"use strict";

function computeSummationToN(n) {
  // your code here
  var cont = 0;

  for (var i = 1; i < n + 1; i++) {
    cont += i;
  }

  return cont;
}

var output = computeSummationToN(6);
console.log(output); // --> 21