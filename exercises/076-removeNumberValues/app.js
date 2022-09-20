let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    Object.keys(obj).forEach(function(key) {
        if (typeof obj[key] === 'number') {
          delete obj[key];
        }
      });
    
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }