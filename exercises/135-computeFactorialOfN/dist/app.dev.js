"use strict";

function computeFactorialOfN(n) {
  // your code here
  var aux = 1;

  for (var e = 1; e < n + 1; e++) {
    aux *= e;
  }

  return aux;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6