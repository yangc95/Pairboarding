// =======================================================
// FREQUENCY COUNTER PATTERN
// =======================================================

// Anagrams -> given two strings, write a f(x) to determine
// if the second string is an anagram of the first
//  example: validAnagram('dog','god') => true

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }

    let fq1 = strToObj(str1);
    
    for (let i = 0; i < str2.length; i++) {
        if (!fq1[str2[i]]) return false;
        if (fq1[str2[i]]) --fq1[str2[i]];
    }
    return true;
}

function strToObj(str) {
    let obj = {};
    str.split("").forEach(char => obj[char] ? ++obj[char] : obj[char] = 1);
    return obj;
}

// console.log(validAnagram('dog','god'));

// =======================================================
// MULTIPLE POINTERS
// =======================================================

// sumZero -> accepts a sorted array, f(x) should return
// first pair where sum is equal to zero

function sumZero(arr) {
 let i1 = 0;
 let i2 = arr.length - 1;

 while (i1 < i2) {
    let sum = arr[i1] + arr[i2];
    if (sum === 0) return [arr[i1], arr[i2]];
    if (sum > 0) i2--;
    if (sum < 0) i1++;
 }
}

// console.log(sumZero([-2, 0, 1, 2, 3]))

// countUniqueValues -> accepts sorted arr, counts unique
// values in array

// function countUniqueValues(arr) {
//     count = 0;
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) count++; 
//     }
//     return count;
// }

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2]))

// =======================================================
// SLIDING WINDOW
// =======================================================

// think in terms of an array or number where the window
// refers to a portion of the data structure
// can either be an array or num from one pos to another

// maxSubarraySum -> takes an arr of integers and a num (n)
// f(x) should calculate max sum of n consecutive ele in arr

function maxSubarraySum(arr, n) {
    if (num > arr.length) return null;

    let max = 0;
}


// =======================================================
// 
// =======================================================

// =======================================================
// 
// =======================================================