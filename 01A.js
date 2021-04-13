// Write a method, digital_root(num).
// It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.

// num = 7
// base case is when the sum of digits is less than 10, just return num

// num = 11 => 2
// num = 15 => 6
// num = 782 => 17 => 8

function digital_root(num) {
    if (num < 10) return num;
    else if (num > 10) return 
}

// caesar_cipher
// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation. Preserve spaces.



// Write a function, longest_common_substring(str1, str2) that takes two strings and returns the longest common substring.
// A substring is defined as any consecutive slice of letters from another string.
// Bonus: solve it in O(m * n) using O(m * n) extra space. (Hint: the solution involves dynamic programming which will be introduced later in the course.)

// sum_rec
// Write a function that takes an array of integers and returns their sum. Use recursion.