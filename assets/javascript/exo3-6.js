function countOccurrences(arr, value) {
    let count = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }

    return count;
}


function mostFrequent(arr) {
    let countMax = 0;
    let elementMax ='';
    for(let item of arr) {
        let countElement = countOccurrences(arr, item)
        if(countElement > countMax) {
            countMax = countElement
            elementMax = item
        }
    }
    return elementMax
}

console.log(mostFrequent([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4]))