"use strict";

function getLengthOfShortestElement(arr) {
  // your code here
  var _short = 1000000;

  if (arr.length === 0) {
    return 0;
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length < _short) {
      _short = arr[i].length;
    }
  }

  return _short;
}

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3