function countOccurrences(arr, value) {
    let count = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }

    return count;
}

let numbers = [3, 3, 5, 3, 7, 3, 2];
let result = countOccurrences(numbers, 3);
console.log(result);
