// Function to check if one array contains squares of another array
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for (let val of arr1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }

    for (let val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }

    for (let key in freq1) {
        if (freq2[key ** 2] !== freq1[key]) {
            return false;
        }
    }

    return true;
}

// Example usage
// console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
// console.log(same([1, 2, 3], [1, 4, 9]));       // true
// console.log(same([1, 2, 3], [1, 2, 3]));       // false



// Function to check if two strings are anagrams
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for (let char of str1) {
        freq1[char] = (freq1[char] || 0) + 1;
    }

    for (let char of str2) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    for (let char of str1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(validAnagram("listen", "silent"));     // true
console.log(validAnagram("triangle", "integral")); // true
console.log(validAnagram("hello", "bello"));       // false
console.log(validAnagram("aabbcc", "abcabc"));     // true
console.log(validAnagram("rat", "car"));           // false
console.log(validAnagram("", ""));                 // true
console.log(validAnagram("a", "aa"));              // false
console.log(validAnagram("abcd", "dcba"));         // true
