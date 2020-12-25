// 2. MAP METHOD

// DIFFERENCES
// 1. lodash map is able to deal with objects inside an array and return values from inside object items. see line 8/23
// 2. works on both array and objects, not possible in JS.  see line 31/38
// 3. there is a short hand to get simple 1 field of data from each object.   see line 41

// LODASH MAP
let lodashArray = _.map(
  [
    { id: 1, name: 'john' },
    { id: 2, name: 'jack' },
  ],
  function (item) {
    return item.id;
  }
);
// JS MAP
let nativeArray = [1, 2, 3].map(function (item) {
  return item;
});

console.log(lodashArray);
console.log(nativeArray);

let users = {
  1: { id: 1, name: 'john' },
  2: { id: 2, name: 'jack' },
};

let userNames = _.map(users, function (user, key) {
  console.log(user.name, key);
  return user.name;
});

console.log(users.map); // undefined

console.log(userNames); // usernames are consoled out

// SHORTHAND
let userId = _.map(users, 'id');
console.log(userId); // only item is consoled out in array form

// MAP QUIZ
let people = [
  { id: 1, first_name: 'John', status: 'active' },
  { id: 2, first_name: 'Mike', status: 'inactive' },
];

// create a function to normalize and convert backend conventional data for front end conventional data for usage

// let people = [
//   {id: 1,firstName: 'John',isActive: true},
//   {id: 2,firstName: 'Mike',isActive: false},
// ];

function normalizePeople(people) {
  return _.map(people, function (person) {
    return {
      id: person.id,
      firstName: person.first_name,
      isActive: person.status === 'active',
    };
  });
}

console.log(normalizePeople(people));

// logs out
// [
// 0: { id: 1, firstName: "John", isActive: true }
// 1: { id: 2, firstName: "Mike", isActive: false }
// ]
