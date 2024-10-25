function filterEven(arr) {
    return arr.filter(x=> x % 2 === 0);
}

let arr = [1,2,3,4,6,7,8,9,6,5,6,94,2,66,1,32,55,63]
let result = filterEven(arr);
console.log(result);