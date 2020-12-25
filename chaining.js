// 9. CHAINING METHODS

// NOTES
// 1. _.chain - initiate chain method
// 2. add anything lodash methods
//3. .value - get results and end chain method

let users = [
  { name: 'john', age: 35, isActive: true },
  { name: 'jack', age: 30, isActive: false },
  { name: 'joe', age: 24, isActive: true },
];

// normal lodash way: filtering for active user, order by age, then get the first data.
function getYoungestUserMessage(users) {
  let activeUsers = _.filter(users, 'isActive');
  let sortedActiveUsers = _.orderBy(activeUsers, ['age']);
  let firstUser = sortedActiveUsers[0];

  return firstUser.name + ' is ' + firstUser.age;
}

console.log(getYoungestUserMessage(users));

// LODASH CHAINING WAY: call value() to end chain method and get results
let firstUserMessage = _.chain(users) //signafying start of chain method
  .filter('isActive') // filtering for isActive
  .orderBy(['age']) // order results by age
  .map(function (user) {
    return user.name + ' is ' + user.age;
  }) // map thru results and return message for all user
  .head() // take only the first result
  .value(); // get value back

console.log(firstUserMessage);
