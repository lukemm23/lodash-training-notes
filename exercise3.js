// 24. LODASH EXERCISE3

// REPLACING PARAMS IN URL

// convert initialUrl to some thing like '/posts/2/comments/3'

// steps
// 1. go through replacements to:
// 2. replace part of each replacement
// 3. return new string

let replaceParamsInUrl = function (url, replacements) {
  // problem 1: not as readable in this form
  // problem 2: map is unnecessary because we are not reassigning nor returning anything
  // _.map(replacements, function (replacement) {
  //   console.log(replacement);
  // problem 3: when param url is string it works, but if param url is an object then it is not mutated, but create a reference of url.
  // url = _.replace(url, ':' + replacement.from, replacement.to);
  // });
  // return url;

  // BETTER SOLUTION: immutable variant makes it much more correct.
  return _.reduce(
    replacements,
    function (acc, replacement) {
      return _.replace(url, ':' + replacement.from, replacement.to);
    },
    url
  );
};
let initialUrl = '/posts/:postId/comments/:commentId';
let resultUrl = replaceParamsInUrl(initialUrl, [
  { from: 'postId', to: '1' },
  { from: 'commentId', to: '3' },
]);

console.log(resultUrl);
