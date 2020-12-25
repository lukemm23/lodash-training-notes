// 6. EVERY AND SOME METHODS

// NOTES
// 1. Every - checking inside array if value of all items meets condition.
// 2. Some - checking inside array if value of atleast one item meets condition.
// 3. both methods works with array or objects.

// LODASH EVERY
let people = {
  1: { id: 1, first_name: 'John', isActive: true },
  2: { id: 2, first_name: 'Mike', isActive: true },
};

let checkEvery1 = _.every(people, function (person) {
  return person.isActive;
});

console.log(checkEvery1);

// SHORTHAND SUGAR
let checkEvery2 = _.every(people, { isActive: true });

console.log(checkEvery2);

// LODASH SOME
let checkSome1 = _.some(people, function (person) {
  return person.isActive;
});

console.log(checkSome1);

// SHORTHAND SUGAR
let checkSome2 = _.some(people, { isActive: true });

console.log(checkSome2);
