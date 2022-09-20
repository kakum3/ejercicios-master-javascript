"use strict";

function modulo(num1, num2) {
  // your code here
  var i = 0;

  if (num1 > 0) {
    while (i < num1) {
      if (i + num2 > num1) break;
      i += num2;
    }

    return num1 - i;
  } else {
    while (i > num1) {
      if (i - num2 < num1) break;
      i -= num2;
    }

    return num1 - i;
  }
}

var output = modulo(-25, 4);
console.log(output); // --> 1