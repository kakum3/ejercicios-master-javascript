function getLengthOfShortestElement(arr) {
    // your code here
    var short=1000000
    if(arr.length===0){return 0}
    for(i=0;i<arr.length;i++){
        if(arr[i].length<short){
            short=arr[i].length
        }
    }return short
    
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3