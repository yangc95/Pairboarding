// What is an algo?
//  a process or set of steps to accomplish a certain task

// =======================================================
// Write a f(x) which takes two nums and returns their sum
// =======================================================

// Can I restate the problem in my own words?
//  implement addition
// What are the inputs that go into the problem?
//  
// What are the outputs that should come from the solution to the problem?
// Can the outputs be determined from the inputs? In other words, do I have enough info to solve the problem?
// How should I label the important pieces of data that are a part of the problem?

// =======================================================
// EXPLORE EXAMPLES
// =======================================================
// * start with simple examples
// * progress to complex examples
// * explore examples with empty inputs
// * invalid inputs

// =======================================================
// PSEUDOCODING
// Write a f(x) that takes in a string and returns a count 
// of each character in the string
// =======================================================
// 1. make obj
// 2. loop over str (bulk of solution)
//      if obj has key of char/num, add one to count
//      else if obj does not have char/num, add to obj and set val to 1
//      else (not char/num) don't do anything
// 3. return at end

function charCount(str) {
    let obj = {};
    str.split("").forEach(char => {
        if (obj[char] > 0) obj[char]++;
        if (!obj[char]) obj[char] = 1;
    }) 
    return obj;
}

// console.log(charCount("hello"))

// =======================================================
// BREAK DOWN THE PROBLEM INTO SOLVEABLE PARTS
// =======================================================
