// time is relative, count operations

function sumUpTo(n) {
    sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// the BigO notation for this function is O(n)

