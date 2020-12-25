// 3. FILTER METHOD

// DIFFERENCES
// 1. works with array and object
// 2. there is a short hand to get simple 1 field of data from each object.

// LODASH ARRAY FILTER
let lodashArray = _.filter([1, 2, 3, 4, 5], function (item) {
  return item < 3;
});

console.log(lodashArray); //return items in array less than 3

let users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'jack' },
];

let userArray = _.filter(users, function (item) {
  return item.name === 'john';
});

console.log(userArray); //returns the item object in array with name is john

// LODASH OBJECT FILTER
let people = {
  1: { id: 1, name: 'john' },
  2: { id: 2, name: 'jack' },
};

let peopleArray = _.filter(users, function (item) {
  return item.name === 'john';
});

console.log(peopleArray); //returns the item object in object with name is john

// SHORTHAND
let peopleArray2 = _.filter(users, { name: 'john' });

console.log(peopleArray2); //returns the item object in object with name is john

// FILTER QUIZ

let products = [
  {
    id: 1,
    name: 'milk',
    price: '$1',
  },
  {
    id: 2,
    name: 'bread',
    price: '$2',
  },
  {
    id: 3,
    name: 'meat',
    price: '$3',
  },
];

// create a function to search searchedValue against products to find the right object
function searchProducts(products, searchedValue) {
  return _.filter(products, function (item) {
    return _.includes(item.name, searchedValue);
    // item.name.includes(searchedValue);    //JS version not supported by all browsers
  });
}

console.log(searchProducts(products, 'm')); // returns result from matches to searchedValue
