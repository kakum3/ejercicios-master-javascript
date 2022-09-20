"use strict";

function getLengthOfLongestElement(arr) {
  // your code here
  var _long = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > _long) {
      _long = arr[i].length;
    }
  }

  return _long;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5