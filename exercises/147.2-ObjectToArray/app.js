function listAllValues(obj) {
  // your code here
  arr=[]
  for(var keys in obj){
    arr.push(obj[keys])
  }return arr
}