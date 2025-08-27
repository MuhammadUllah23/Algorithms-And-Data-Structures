// -------------------
// Sliding Window Pattern
// 
// Involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very usefule for keeping track of a subset of data in an array/string etc.
// -------------------

const arr1 = [1, 2, 5, 2, 8, 1, 5];
const arr2 = [1, 2, 5, 2, 8, 1, 5];
const arr3 = [4, 2, 1, 6];
const arr4 = [4, 2, 1, 6, 2];


// Example: 
// Write a function call maxSubarraySum which accepts an array of intetgers and a number called n.
// The function should calculate the maximum sum of consecutive elements in the array.
// Time complexity: O(n)
// Space complexity: O(1)

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i] 
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

console.log(maxSubarraySum(arr1, 3)); //15
console.log(maxSubarraySum(arr2, 4)); // 17
console.log(maxSubarraySum(arr3, 2)); // 7
console.log(maxSubarraySum(arr4, 3)); // 9