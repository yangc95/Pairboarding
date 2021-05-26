function quicksort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  let left = arr.filter(el => el < pivot);
  let right = arr.filter(el => el > pivot);
  return quicksort(left).concat([mid]).concat(quicksort(right));
}

console.log(quicksort([1,4,5,2,6]))