function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}


let fruits = ["apple", "banana", "cherry"];
let reversedFruits = reverseArray(fruits);

console.log(reversedFruits); 

