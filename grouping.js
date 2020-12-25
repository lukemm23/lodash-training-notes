// 8. GROUPING METHODS

// NOTES
// 1. does not exist in JS
// 2. works with objects and array, grouping by params
// 3.  grouping data by property conditions.

let people = [
  { name: 'user1', isActive: true },
  { name: 'user2', isActive: true },
  { name: 'user3', isActive: false },
];

// JS GROUPING : does not working with objects, and super confusing
function groupBy(list, prop) {
  return list.reduce(function (aggregator, element) {
    (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
    return aggregator;
  }, {});
}

console.log(groupBy(people, 'isActive'));

// LODASH GROUPBY: give array and property to group by
let groups1 = _.groupBy(people, function (person) {
  return person.isActive;
});

console.log(groups1);

// SHORTHAND SUGAR
let groups2 = _.groupBy(people, 'isActive');

console.log(groups2);
