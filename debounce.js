// 19. LODASH DEBOUNCE
//
// NOTE
// 1. debounce helps with sending request only when user stops typing
// 2. use debounce when request is sent too often. controlled by timer.

// WITH DEBOUNCE
let handler = function (event) {
  console.log('we sent request', event.target.value);
};
document
  .getElementById('name')
  .addEventListener('keydown', _.debounce(handler, 2000));

// WITHOUT DEBOUNCE
// sending request at every keydown
// document.getElementById('name').addEventListener('keydown', function (event) {
//   console.log('we sent request', event.target.value);
// });
