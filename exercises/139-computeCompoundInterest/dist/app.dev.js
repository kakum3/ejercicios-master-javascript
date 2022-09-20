"use strict";

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var aux = 1 + interestRate / compoundingFrequency;
  var aux2 = Math.pow(aux, compoundingFrequency * timeInYears);
  var aux3 = principal * aux2;
  return aux3 - principal;
}

var output = computeCompoundInterest(1500, 0.043, 4, 6);
console.log(output); // --> 438.83682213410543