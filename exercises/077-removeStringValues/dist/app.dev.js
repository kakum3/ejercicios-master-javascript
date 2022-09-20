"use strict";

var obj = {
  name: 'Sam',
  age: 20
};

function removeStringValues(obj) {
  // your code here
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'string') {
      delete obj[key];
    }
  });
}

removeStringValues(obj);
console.log(obj); // { age: 20 }