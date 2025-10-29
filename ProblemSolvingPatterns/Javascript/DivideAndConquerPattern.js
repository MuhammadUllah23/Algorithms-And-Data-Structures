// -------------------
// Divide and Conquer
// 
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset data
// This pattern can tremendously decrease time complexity
// -------------------


// Example: 
// Given a sorted array of integers, write a function called search, that accepts a value 
// and returns the index where the value passed into the function is located.
// If the value is not found then return -1
// 
// Time complexity: Log(N)
// Space complexity: O(1)

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    
    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1; // search right half
        } 
        else if (arr[middle] > val) {
            max = middle - 1; // search left half
        }
        else {
            return middle;
        }
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

