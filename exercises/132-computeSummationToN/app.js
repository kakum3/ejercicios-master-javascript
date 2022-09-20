function computeSummationToN(n) {
  // your code here
  let cont=0
  for(let i=1;i<n+1;i++)cont+=i;
    return cont
  
  
}

let output = computeSummationToN(6);
console.log(output); // --> 21

