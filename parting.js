// 10. PARTING METHODS

// NOTES
// 1. very readable code, to get first or rest part of an array or text.
// 2.  use _.last to get last element of array or text.
// 3. use _.initial as opposite of tail and get first part of array or text.
// 4. all parting methods in lodash does not mutate the original array.

let numbers = [1, 2, 3];

// JS: this is less readable
let head2 = numbers[0];
let tail2 = numbers[2];
console.log(head2, tail2);

// LODASH HEAD AND TAIL: this is very readable
let head1 = _.head(numbers);
let tail1 = _.tail(numbers);
console.log(head1, tail1);

// HEAD WITH TEXT
let textHead = _.head('123');
console.log(textHead);

// LAST
let last = _.last(numbers);
console.log(last);

// LAST WITH TEXT
let textLast = _.last('123');
console.log(textLast);

// JS: this is less readable
let initial1 = numbers.slice(0, -1);
console.log(initial1);

// INITIAL
let initial2 = _.initial(numbers);
console.log(initial2);

// INITIAL WITH TEXT
let textInitial = _.initial('123');
console.log(textInitial);
