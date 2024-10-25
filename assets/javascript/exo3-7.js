function reversWords(sentence){
    return sentence.split(' ').reverse().join(' ');

}

let sentence = "I hate JavaScript and I love programming" 
let result = reversWords(sentence);
console.log(result);