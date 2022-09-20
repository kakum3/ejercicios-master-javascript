function convertObjectToList(obj) {
  // your code here
  var array=[];
  for(var keys in obj){
  var  arr2=[];
    arr2.push(keys);
    arr2.push(obj[keys]);
    array.push(arr2)
  }return array
}