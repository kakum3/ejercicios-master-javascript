function getAllWords(str) {
    // your code here
    if (str === '') {                                           // Checks for empty string
        return [];
    }
    return str.split(' ');                                      // Returns an array using split() method, using an empty space between
}
    

