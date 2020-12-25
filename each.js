// 1. EACH METHOD

// DIFFERENCES
// 1. you can to assign lodash function to a variable, not possible with JS.
// 2. you can use lodash each for both array and objects, not possible with JS.
// 3. you can easily iterate thru an object and create an array with all things from the object.

// LODASH EACH
let lodashEach = _.each([1, 2], function (item) {
  console.log(item);
});
// JS EACH
let nativeEach = [1, 2].forEach(function (item) {
  console.log(item);
});

console.log(lodashEach); // lodash is able to console out
console.log(nativeEach); // js each method consoles out undefined

let food = {
  1: { name: 'milk' },
  2: { name: 'bread' },
};

let foodArray = [];

console.log(food.forEach); // undefined

_.each(food, function (value, key) {
  console.log(value, key);

  foodArray.push(value);
}); // both value and key are consoled out

console.log(foodArray); //iterating thru an object and creating an array of all things from the object.
