// 4. FIND METHOD

// NOTES
// 1. finds and returns only the first match, it is best to use a   unique key to match against.
// 2. when there are no results method will return undefined instead of empty array.
// 3. also works for array and objects
// 4. use find instead of filter and return the first result when applicable as it is cleaner code.

// LODASH FIND
let users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'jack' },
  { id: 3, name: 'john' },
  { id: 4, name: 'jack' },
];

let john = _.find(users, function (user) {
  return user.name === 'john';
});

console.log(john);

// SHORTHAND SUGAR
let jack = _.find(users, { name: 'jack' });
let id2 = _.find(users, { id: 2 });

console.log(jack);
console.log(id2);
