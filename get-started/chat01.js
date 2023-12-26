'use strict';

var adult = true;

if (adult) {
  var myName = 'César';
  let age = 39;
  console.log('Shh this is a secret', age);
}


console.log(myName);
console.log(adult.__proto__);

const arr = [1, 2, 3, 5, 7];
const iter2 = arr.values();
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

// new Map()
// const iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
