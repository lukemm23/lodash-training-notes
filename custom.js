// 21. LODASH CUSTOM METHODS WITH MIXINS

// NOTE

// capitalizeLast() does not exist inside LODASH, so it cannot be called inside the _.chain
// _.chain('foo').capitalizeLast().value();

function capitalizeLast(str) {
  let lastSymbol = _.last(str);
  let initialSymbols = _.chain(str).initial().join('');

  return initialSymbols + _.capitalize(lastSymbol);
}

console.log(capitalizeLast('foo')); // capitalizeLast working as expected.

_.mixin({ capitalizeLast: capitalizeLast });

// now the custom function capitalizeLast is functional inside _.chain

let result = _.chain('foo').capitalizeLast().value();
console.log(result);
