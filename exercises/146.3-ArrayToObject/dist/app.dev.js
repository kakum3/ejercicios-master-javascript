"use strict";

function transformEmployeeData(array) {
  // your code here
  var data = [];

  for (var index = 0; index < array.length; index++) {
    var obj = {};

    for (var j = 0; j < array[i].length; j++) {
      obj[array[i][j][0]] = array[i][j][1];
    }

    data.push(obj);
  }

  return data;
}

var output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]