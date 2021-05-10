// time is relative, count operations

function sumUpTo(n) {
    sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// the BigO notation for this function is O(n)
// let's look at another solution with a BigO notation of O(1)
function sumUpTo(n) {
    return n * (n + 1) / 2
}
// this is the constant solution

// BigO is about the worst case scenario or upper bound for runtime
// You can say, "as the input grows, the Big O is O(x)"
// x represents what the runtime for the function is

function printAllPairs(n) {
    for (let i = 0; i < n; i++) {       // O(n)
        for(let j = 0; j < n; j++) {    // another O(n) operation inside
            console.log(i, j);
        }
    }
}
// the notation here is O(n^2) in terms of runtime

// Proportinate to n^2, as an input n grows, ask yourself
// "how does that change or reflect in the runtime"

// Big-O Cheat Sheet
// https://www.bigocheatsheet.com/


// SPACE COMPLEXITY - amount of memory needed
// auxiliary space complexity - space required by algo as input increases
// (not including input's space)

// most primitive types are constant space
// string take up O(n) space
// Reference types are generally O(n)
// where n is the length (arr) or # of keys (obj)

// Example of O(1) space complexity
function sum(arr) {
    total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Example of O(n) space complexity
function double(arr) {
    newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// as the algo is played out, the newArr contructed inside the f(x)
// grows according to the input's length

// Log simple recap
// log2 8 = 3 --> 2^3 = 8
// logBase Value = Exponent --> Base^Exponent = Value
// for Big-O, omit the base


// RECAP
// BigO analyzes the performace of an algo in terms of
// time or space complexity
// dealing with general trends (linear, quadratic, constant)


// =======================================================
// CCI NOTES BELOW
// =======================================================

// Quicksort - O(n log n)
//  picks random "pivot" element and partially sorts the array
//  based on the pivot point. It recursively sorts the L/R sides
//  using this process
function quicksort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    let left = arr.filter(ele => ele < pivot);
    let right = arr.filter(ele => ele > pivot);
    return quicksort(left).concat([pivot]).concat(quicksort(right));
}

// console.log(quicksort([1,4,2,7,3,0]))

// ArrayList is a dynamically resizing array
//  capacity will grow as you insert elements