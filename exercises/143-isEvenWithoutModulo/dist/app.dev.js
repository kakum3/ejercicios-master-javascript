"use strict";

function isEvenWithoutModulo(num) {
  // your code here
  if (!(num & 1)) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenWithoutModulo(8);
console.log(output); // --> true