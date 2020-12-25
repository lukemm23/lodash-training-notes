// 18. CHECKING TYPE

// NOTE
// 1. can work with not only primitives but array and objects
// 2. less bug and mistake prone.
// 3. could used inside chain of lodash methods.

//JS ISEQUAL
1 == '1'; // == in JS compares by value only and this is bug prone
1 === 2; // === compares by type and value but mistakes are very easily made.

console.log({ a: 1 } === { a: 1 }); // this will return false, because 2 objects cannot be equal in JS.

//LODASH ISEQUAL PRIMITIVE
let check1 = _.isEqual(1, '1');
console.log(check1); //this is always false, and much cleaner

//LODASH ISEQUAL OBJECTS
let object1 = { a: 1 };
let object2 = { a: 1 };
let check2 = _.isEqual(object1, object2);

console.log(check2); // this will return true as the values inside the objects are equal.

//JS ISEMPTY
let usersA = [];
let usersB = {};

console.log(usersA.length === 0); // hard to understand, and mistake prone
console.log(usersB.length === 0); // this returns false, which is not correct by quality

//LODASH ISEMPTY
console.log(_.isEmpty([])); // returns true
console.log(_.isEmpty({})); // returns true

// JS ISNIL: usually written like this
let user1 = '';
if (user1 !== undefined && user1 !== null) {
  console.log('user is there');
}

// LODASH ISNIL: automatically checks for both undefined and null.
//  much cleaner, less mistake prone
let user2 = '';
if (!_.isNil(user2)) {
  console.log('user is there');
}
