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

// =======================================================
// 
// =======================================================

// =======================================================
// 
// =======================================================

// =======================================================
// 
// =======================================================