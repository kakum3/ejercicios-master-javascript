"use strict";

function getLongestWordOfMixedElements(arr) {
  // your code here
  var aux = '';

  if (arr.length > 0) {
    var hasString = arr.find(function (e) {
      return typeof e == 'string';
    });

    if (hasString != undefined) {
      arr.map(function (e) {
        if (e.length > aux) aux = e;
      });
    } else {
      aux = '';
    }
  } else {
    aux = '';
  }

  return aux;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'