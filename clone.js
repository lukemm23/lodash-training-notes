// 17. LODASH CLONE AND CLONEDEEP

// NOTE
// 1. JS methods have issues with mutating original data.
// 2. use LODASH to clone original data (works with flat data structure only) and then edit new clone.
// 3. use LODASH to cloneDeep original data (works with nested data structure) and then edit new clone.

// JS: baseConfig is now mutated
let baseConfig1 = {
  apiUrl: 'http://someapi.com',
  port: 400,
};

function createExtendedConfig1(config) {
  config.host = 'http://google.com';
  return config;

  // instead, you have to return new object to avoid mutating baseConfig1.
  // but this is hard to understand
  // return Object.assign({}, config, { host: 'http://google.com' });
}

let extendedConfig1 = createExtendedConfig1(baseConfig1);
// baseConfig is now mutated, and is the same as extendedConfig
console.log(extendedConfig1, baseConfig1);

// LODASH CLONE
let baseConfig2 = {
  apiUrl: 'http://someapi.com',
  port: 400,
};

// this is very easy to understand and not bug prone
// works with flat objects, not with nested objects
function createExtendedConfig2(config) {
  let clonedConfig = _.clone(config);
  clonedConfig.host = 'http://google.com';
  return clonedConfig;
}

let extendedConfig2 = createExtendedConfig2(baseConfig2);

console.log(extendedConfig2, baseConfig2);

// LODASH NESTED OBJECTS CLONE
let a1 = { b: { c: 1 } };
let b1 = _.clone(a1);
b1.b.foo = 'bar';
// a is now mutated, and _.clone did not prevent this
console.log(a1);
console.log(b1);

// LODASH NESTED OBJECT CLONEDEEP
let a2 = { b: { c: 1 } };
let b2 = _.cloneDeep(a2);
b2.b.foo = 'bar';
// A IS LEFT ALONE, AND _.CLONEDEEP PREVENTED THE MUTATION.
console.log(a2);
console.log(b2);
