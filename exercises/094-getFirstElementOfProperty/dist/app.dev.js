"use strict";

// Write your function here
function getFirstElementOfProperty(obj, key) {
  for (var key in obj) {
    if (typeof obj[key] === 'undefined' || !Array.isArray(obj[key])) {
      return 'undefined';
    } else {
      return obj[key][0];
    }
  }
}