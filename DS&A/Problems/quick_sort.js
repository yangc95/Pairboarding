function quicksort(arr) {
  let mid = arr[arr.length/2];

  let left = arr.filter(el => el < arr[mid]);
  let right = arr.filter(el => el > arr[mid]);

  return quicksort(left).concat([mid]).concat(quicksort(right));
}

console.log(quicksort([1,4,5,2,6]))