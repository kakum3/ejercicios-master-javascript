function removeEvenValues(obj) {
    // your code here
    for(var par in obj ){
        if(obj[par]%2==0){
            delete obj[par]

        }
    }
    
}