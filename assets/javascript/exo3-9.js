function mergeArrays(arr1, arr2) {
    let mergedArray = [];
  
    
    for (let i = 0; i < arr1.length; i++) {
      mergedArray.push(arr1[i]);
    }
  
    
    for (let j = 0; j < arr2.length; j++) {
      mergedArray.push(arr2[j]);
    }
  
    return mergedArray;
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ["pomme", "bananes", "kiwi", "fraise", "orange"];
  console.log(mergeArrays(arr1, arr2)); 
  