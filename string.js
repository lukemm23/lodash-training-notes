// 11. STRING TRANSFORMATION

// NOTE
// 1. lodash methods could be used inside _.chain where JS methods cannot

// LODASH CASE

let FOO1 = _.toUpper('foo');
let foo1 = _.toLower('FOO');

console.log(FOO1);
console.log(foo1);

// JS CASE
let FOO2 = 'foo'.toUpperCase();
let foo2 = 'FOO'.toLowerCase();

console.log(FOO2);
console.log(foo2);

let chainFoo = _.chain('FOO').toLower().split('').value();

console.log(chainFoo);

// LODASH JOIN AND SPLIT
let split1 = _.split('foo/bar', '/');
let join1 = _.join(['foo', 'bar'], '/');
console.log(split1);
console.log(join1);

// chaining a split then a join and get the same result back.
// JS CANNOT CHAIN THESE METHODS
let joinSplit = _.chain('foo/bar').split('/').join('/').value();
console.log(joinSplit);

// JS JOIN AND SPLIT
let split2 = 'foo/bar'.split('/');
let join2 = ['foo', 'bar'].join('/');
console.log(split2);
console.log(join2);

// LODASH CAPITALIZE BY CHAIN
function capitalize(str) {
  let lowerCasedStr = _.toLower(str);
  let firstLetter = _.chain(lowerCasedStr).head().toUpper().value();
  let tail = _.chain(lowerCasedStr).tail().join('').value();

  return firstLetter + tail;
}

console.log(capitalize('foO'));

// LODASH CAPITALIZE: does not exist in JS
let capitalizedWord = _.capitalize('foO');

console.log(capitalizedWord);

// LODASH CAMELCASE
// LODASH SNAKECASE
// this is very useful since its dificult to write in JS to cover all cases
let str = 'Foo bar Bazz';
let camelStr = _.camelCase(str);
let snakeStr = _.snakeCase(str);

console.log(camelStr);
console.log(snakeStr);
// STRING TRANSFORMATION QUIZ
// convert 'This is super quiz' into this-is-super-quiz
let slug = 'This is super quiz';
function toSlug(slug) {
  return _.chain(slug)
    .toLower() // making all lowercased
    .split(' ') // spliting words by space
    .join('-') // joining words with dash
    .value(); // getting back result
}

console.log(toSlug(slug));
