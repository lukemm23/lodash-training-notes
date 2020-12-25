// 12. LODASH RANDOMIZE

// NOTE
// 1. getting random number is simplified by lodash. simply use
// _.random

console.log(Math.random());

// JS RANDOM: HARD TO UNDERSTAND
function random(from, to) {
  return Math.floor(Math.random() * to) + from;
}

console.log(random(0, 100));

// LODASH RANDOM: add third param true to get floating decimals
let randomNum1 = _.random(0, 100, true);

console.log(randomNum1);

// SHORTHAND SUGAR: if from argument is 0, it will be applied automatically
let randomNum2 = _.random(100);

console.log(randomNum2);
