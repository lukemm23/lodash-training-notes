// 5. REMOVE METHODS

// NOTES
// 1. _.without - removes item from array by value and returns a new manipulated array
// 2. _.reject - removes matched object inside array
// 3. use _.remove as little as possible as it mutates the original data.

// LODASH WITHOUT
let shortArray = _.without([1, 2, 3], 1, 2);

console.log(shortArray); //return [3] only

let initialArray = [1, 2, 3];
let changedArray = _.without(initialArray, 1, 2);

console.log(initialArray);
console.log(changedArray);
// as you can see initialArray was not mutated, changedArray is a new array with newly manipulated data.

// LODASH REMOVE - DONT DO THIS!
let people = [
  { id: 1, first_name: 'John', status: 'active' },
  { id: 2, first_name: 'Mike', status: 'inactive' },
];

console.log(people); // returns original people array

let filterUsers = _.filter(people, function (person) {
  return person.id !== 2;
});

console.log(filterUsers); // this will work, but its hard to read with negate inside function

let rejectUsers = _.reject(people, function (person) {
  return person.id === 2;
});

console.log(rejectUsers); // this will work, and its easy to read

let removeUsers = _.remove(people, function (person) {
  return !person.isActive;
});

console.log(people); // returns muted empty people array
console.log(removeUsers); // RETURNED THE WRONG DATA HERE

// REMOVE QUIZ
let users = [
  {
    id: 1,
    name: 'john',
    isActive: false,
    likes: 110,
  },
  {
    id: 2,
    name: 'jack',
    isActive: true,
    likes: 30,
  },
  {
    id: 3,
    name: 'mike',
    isActive: true,
    likes: 190,
  },
];

// solution 1: is cleaner and easier to read
function getPopularUsers1(users) {
  return _.filter(users, function (user) {
    return user.isActive && user.likes > 100;
  });
}

console.log(getPopularUsers1(users));

// solution 2
function getPopularUsers2(users) {
  return _.reject(users, function (user) {
    return !user.isActive || user.likes < 100;
  });
}

console.log(getPopularUsers2(users));
