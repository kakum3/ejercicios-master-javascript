function findShortestOfThreeWords(word1, word2, word3) {
    // your code here

    let aux = '999999999999999999999999999999';
    if (word1.length < aux.length) aux = word1;
    if (word2.length < aux.length) aux = word2;
    if (word3.length < aux.length) aux = word3;
    return aux;
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'