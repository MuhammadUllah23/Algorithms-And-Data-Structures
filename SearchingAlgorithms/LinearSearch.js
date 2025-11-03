// -------------------
// Linear Search
// 
// In Linear Search, we iterate over all the elements of the array and check if it the current element is equal to the target element. 
// If we find any element to be equal to the target element, then return the index of the current element. 
// Otherwise, if no element is equal to the target element, then return -1 as the element is not found. 
// Linear search is also known as sequential search.
// 
// Javascript Examples: .includes , .indexOf , .find , .findIndex
// -------------------

function linearSearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
          return i
      }
  }
  
  return -1
  
}

// console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
// console.log(linearSearch([100], 100)) // 0
// console.log(linearSearch([1,2,3,4,5], 6)) // -1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1
// console.log(linearSearch([100], 200)) // -1