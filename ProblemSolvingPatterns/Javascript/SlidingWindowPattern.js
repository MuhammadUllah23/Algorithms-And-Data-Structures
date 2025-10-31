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

// console.log(maxSubarraySum(arr1, 3)); //15
// console.log(maxSubarraySum(arr2, 4)); // 17
// console.log(maxSubarraySum(arr3, 2)); // 7
// console.log(maxSubarraySum(arr4, 3)); // 9



function minSubArrayLen(arr, n) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < arr.length) {
        if (total < n && end < arr.length) {
            total += arr[end];
            end++;
        }
        else if (total >= n) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        }
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}



console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0