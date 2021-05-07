// Adding elements to the beginning of an array is costly

// Refresher - an object is an unordered data structure
// made up of key value pairs
// BigO for Objects:
//  insertion -> O(1)
//  removal -> O(1)
//  searching -> O(n)
//  access -> O(1)

// Object Methods
//  .keys -> O(n)
//  .values -> O(n)
//  .entries -> O(n)
//  hasOwnProperty -> O(1)

// =======================================================

// Arrays, ordered lists
// there is intrinsic order to the data
// each element in the array has an index

// BigO for Array:
//  insertion -> it depends
//      to add to end of an array is constant time O(1)
//      to add to beginning of an array is the problem b/c
//      every item would need to be re-indexed O(n)
//  removal -> depends
//      from the beginning of array, every item would be
//      re-indexed
//  searching -> O(n)
//  access -> O(1)

// Array Methods
//  push and pop -> O(1)
//  shift and unshift -> O(n)
//  concat, slice, splice -> O(n)
//  sort -> O(nlog(n))
//  forEach/map/filter/reduce/etc -> O(n)

// Singly linked list

// Doubly liked list