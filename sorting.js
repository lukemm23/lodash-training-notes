// 7. SORTING METHODS

// NOTES
// 1. works with objects and array,  sorting data with multiple parameters in specified order desc or asc

let users = [
  {
    name: 'Fred',
    likes: 10,
  },
  {
    name: 'John',
    likes: 12,
  },
  {
    name: 'Jack',
    likes: 12,
  },
  {
    name: 'Alex',
    likes: 1,
  },
];

// JS SORT : HARD TO UNDERSTAND
let jsSortedUsersArray = users.sort(function (user1, user2) {
  return user1.likes < user2.likes ? -1 : 1;
});

console.log(jsSortedUsersArray);

// LODASH ORDERBY : SO EASY TO UNDERSTAND
//IN ASC ORDER
let lodashSortedUsersArray1 = _.orderBy(users, ['likes']);

console.log(lodashSortedUsersArray1);

//IN DESC ORDER : ADD THIRD PARAMETER TO SPECIFY ORDER
let lodashSortedUsersArray2 = _.orderBy(users, ['likes'], ['desc']);

console.log(lodashSortedUsersArray2);

//SORT BY MULTIPLE PARAMETERS : ADD MORE CONDITIONS INSIDE SECOND PARAM
let lodashSortedUsersArray3 = _.orderBy(
  users,
  ['likes', 'name'],
  ['desc', 'asc']
);

console.log(lodashSortedUsersArray3);
