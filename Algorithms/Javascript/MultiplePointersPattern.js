// -------------------
// Multiple Pointers Pattern
// -------------------

// sumZero function
// Time complexity: O(n)
// Space complexity: O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return "No numbers that sum up to 0";
}

// Test data for sumZero
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));  // [-3, 3]
console.log(sumZero([1, 2, 3, 4, 5]));           // "No numbers that sum up to 0"
console.log(sumZero([-2, 0, 1, 3]));             // "No numbers that sum up to 0"
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]



// -------------------
// My Solution
// -------------------

function countUniqueValues(sortedArr) {
  // edge case
  if (sortedArr.length === 0) return 0;
  if (sortedArr.length === 1) return 1;

  let i = 0;
  let j = 1;

  while (j < sortedArr.length) {
    if (sortedArr[i] === sortedArr[j]) {
      j++;
    } else {
      // remove duplicates between i+1 and j
      sortedArr.splice(i + 1, j - (i + 1));
      i++;
      j = i + 1; // reset j to i+1 after splice
    }
  }

  return sortedArr.length;
}

// Test data for countUniqueValues
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));               // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([]));                                // 0
// console.log(countUniqueValues([1]));                               // 1
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));                 // 4

// -------------------
// AI Solution
// -------------------

function countUniqueValuesAi(sortedArr) {
  if (sortedArr.length === 0) return 0;

  let count = 1;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i - 1]) {
      count++;
    }
  }
  return count;
}

// Test data for countUniqueValuesAi
// console.log(countUniqueValuesAi([1, 1, 1, 1, 1, 2]));               // 2
// console.log(countUniqueValuesAi([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValuesAi([]));                                // 0
// console.log(countUniqueValuesAi([1]));                               // 1
// console.log(countUniqueValuesAi([-2, -1, -1, 0, 1]));                 // 4
// console.log(countUniqueValuesAi([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7])) // 7

// Udemy Solution

function countUniqueValuesUdemy(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    i++;
    arr[i] = arr[j]
  }
}

// Test data for countUniqueValuesUdemy
// console.log(countUniqueValuesUdemy([1, 1, 1, 1, 1, 2]));               // 2
// console.log(countUniqueValuesUdemy([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValuesUdemy([]));                                // 0
// console.log(countUniqueValuesUdemy([1]));                               // 1
// console.log(countUniqueValuesUdemy([-2, -1, -1, 0, 1]));                 // 4