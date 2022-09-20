let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for(var value in obj){
        if (obj[value]<num){
            delete obj[value]
        }
    }
    
}
