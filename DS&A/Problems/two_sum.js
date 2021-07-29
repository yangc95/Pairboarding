// Given an array of nums and a target num, return the 
// index pair at which two numbers of the array sum up to the target


// First case scenario, assume that there is only one pair

function twoSum(arr, target) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        // console.log(obj)
        if (obj.hasOwnProperty(arr[i])) {
        // if (obj[arr[i]]) {
            return [i, obj[arr[i]]]
        } else {
            obj[target - arr[i]] = i
        }
    }
}

console.log(twoSum([2,7,11,15], 9))

// why do you need to explicitly check that a key/value in an object
// is undefined for this solution of twoSum to work