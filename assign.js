// 16. LODASH ASSIGN

// NOTE
// 1. used to merge several objects together, and it works in most browsers.
// 2. JS method Object.assign() does not work in all browsers.

// JS
let oldState1 = {
  isLoading: true,
  data: null,
  error: null,
};

let newState1 = {
  isLoading: false,
  data: { id: 1, name: 'john' },
};

// JS ASSIGN: overwriting oldState with newState and keeping oldState that is not overwritten.
let merge1 = Object.assign({}, oldState1, newState1);
console.log(merge1);

// with this way old state is mutated.
Object.assign(oldState1, newState1);
console.log(oldState1, newState1);

// LODASH
let oldState2 = {
  isLoading: true,
  data: null,
  error: null,
};

let newState2 = {
  isLoading: false,
  data: { id: 1, name: 'john' },
};

let merge2 = _.assign({}, oldState2, newState2);
console.log(merge2);
console.log(oldState2, newState2);
