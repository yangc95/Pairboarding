function binarySearch(arr, target) {
    let midIndex = (arr.length)/2;

    if (target < arr[midIndex]) {
        return binarySearch(arr[0..midIndex - 1], target)
    } else if (target > arr[midIndex]) {
        return binarySearch(arr[midIndex + 1..arr.length - 1], target)
    } else if (target === arr[midIndex]) {
        return midIndex;
    } else {
        return null;
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 3))