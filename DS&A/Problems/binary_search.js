function binarySearch(arr, target) {
    let midIndex = arr.length/2;

    if (target < arr[midIndex]) {

    } else if (target > arr[midIndex]) {

    } else if (target === arr[midIndex]) {
        return midIndex;
    } else {
        return null;
    }
}