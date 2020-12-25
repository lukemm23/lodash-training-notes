// 20. LODASH THROTTLE

// NOTE
// 1. controlling button clicked too often by throttling event handler.

// WITHOUT THROTTLING
// let handler = function (event) {
//   console.log('we sent request');
// };
// document.getElementById('go').addEventListener('click', handler);

// WITH THROTTLING
let handler = function (event) {
  console.log('we sent request');
};
document
  .getElementById('go')
  .addEventListener('click', _.throttle(handler, 2000));
