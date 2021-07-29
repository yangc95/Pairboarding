function reverse(num) {
  return (num === 0 ? 1 : 0);
}

function reverseCount(A) {
  if (A.length === 1) return 0;

  let count = 0;
  // 
  for (let i = 0; i < A.length - 2; i++) {
    let current = A[i];
    let next = A[i+1];
    let secondNext = A[i+2];

    // if (i = 0) {
    //     if (current === next || current !== secondNext) {
    //       A[i] = reverse(current);
    //       count += 1;
    //     } else {
    //       A[i+1] = reverse(next);
    //       count += 1;
    //     }
    //     continue;
    // }

    if (current === next) {
        if (current === secondNext) {
            A[i+1] = reverse(next);
            // next = reverse(next);
            count += 1
        } else {
            A[i] = reverse(current);
            // current = reverse(current);
            count += 1
        }
    } else if (current !== secondNext) {
        A[i+2] = reverse(secondNext);
        // secondNext = reverse(secondNext);
        count += 1;
    }
  }
  return count;
}

let arr1 = [0,1,1,0]
let arr2 = [0,1,0]
let arr3 = [1,1,1,0,0,1,1,1]

console.log(reverseCount(arr1))
console.log(arr1)
console.log(reverseCount(arr2))
console.log(arr2)
console.log(reverseCount(arr3))
console.log(arr3)