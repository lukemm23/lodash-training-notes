// 23. LODASH EXERCISE2

// CONDITIONAL CLASSNAME

// expect
// 'item item-highlighted'

// steps
// 1. map throught object
// 2. check value -> if true return the key
// 3. return in map undefined when false
// 4. remove undefineds with compact
// 5. concat into string

//not as readable in this form
let classNames = function (conditions) {
  // let result = _.map(conditions, function (value, key) {
  //   return value ? key : undefined;
  // });
  // return _.join(_.compact(result), ' ');

  // BETTER SOLUTION: break it down by steps, and single out the one step and create getUsedClassName function.
  let getUsedClassName = function (value, key) {
    return value ? key : undefined;
  };

  return _.chain(conditions).map(getUsedClassName).compact().join(' ').value();
};

let isAuthor = false;
let isInFocus = true;
let liClass = classNames({
  item: true,
  active: isAuthor,
  'item-highlighted': isInFocus,
});

console.log(liClass);
