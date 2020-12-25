// 22. LODASH EXERCISE1

// MAPPING
let loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

let bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

// expecting this result
// [
//   {
//     config_key: 100,
//     location_key: 32,
//     autoassign: 1
//   },
//   {
//     config_key: 100,
//     location_key: 22,
//     autoassign: 1
//   }
// ]

// steps
// 1. map loc array through the objects
// 2. get index of current element
// 3. bulkConfig[1].dataValues.config_key
// 4. create 3 new object with map through location_keys
// 5. flatten array of array

//not as readable in this form
let result = _.map(loc, function (locEl, index) {
  return _.map(locEl.location_key, function (locationkey) {
    return {
      location_key: locationkey,
      config_key: bulkConfig[index].dataValues.config_key,
      autoassign: locEl.autoassign,
    };
  });
});

let flattenedResult = _.flatten(result);

console.log(flattenedResult);

// BETTER SOLUTION: break it down by steps, and single out the one step and create getConfigs function.
let getConfigs = function (locEl, index) {
  return _.map(locEl.location_key, function (locationkey) {
    return {
      location_key: locationkey,
      config_key: bulkConfig[index].dataValues.config_key,
      autoassign: locEl.autoassign,
    };
  });
};

let result1 = _.chain(loc).map(getConfigs).flatten().value();

console.log(result1);
