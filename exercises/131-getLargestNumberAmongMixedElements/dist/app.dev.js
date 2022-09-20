"use strict";

function getLargestNumberAmongMixedElements(arr) {
  // your code here
  var aux = 0;

  if (arr.length > 0) {
    var hasNumbers = arr.find(function (e) {
      return typeof e == 'number';
    });

    if (hasNumbers) {
      arr.map(function (e) {
        if (e > aux) {
          aux = e;
        }
      });
    } else {
      aux = 0;
    }
  } else {
    return 0;
  }

  return aux;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

n;