function squareElements(arr) {
  // your code here
var  newArray=[];
for(var i=0;i<arr.legth;i++){
  newArray.push(arr[i]**2)
}
return newArray
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]