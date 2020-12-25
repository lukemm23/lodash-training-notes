// 15. LODASH COMPACT

// NOTE
// 1. remove all falsey values from array

let arr = [1, 2, null, 3, undefined, 0, false, 4, 'string'];

// JS COMPACT: hard to understanding, hard to reuse
let compact1 = arr.filter(Boolean);
console.log(compact1);

// LODASH COMPACT
let compact2 = _.compact(arr);
console.log(compact2);
