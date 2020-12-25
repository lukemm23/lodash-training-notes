// 14. LODASH FLATTEN

// NOTE
// 1. it is easier to use as method of lodash and more reusable.

let numbers = [
  [1, 2],
  [3, 4],
];

// JS FLATTEN
let flattenedNumbers1 = [].concat.apply([], numbers);
console.log(flattenedNumbers1);

// LODASH FLATTEN: easy to understanding and more reusable as method.
let flattenedNumbers2 = _.flatten(numbers);
console.log(flattenedNumbers2);
