function getDependencies(tree, result = {}) {
  let dependencies = tree && tree.dependencies || {};
  Object.keys(dependencies)
    .forEach(dependency => {
      let key = dependency + "@" + dependencies[dependency].version;
      result[key] = 1;
      getDependencies(dependencies[dependency], result);
    });
  return Object.keys(result)
    .sort();
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  //return result;
}

module.exports = getDependencies;
//
// let loremIpsum = {
//   "name": "lorem-ipsum",
//   "version": "0.1.1",
//   "dependencies": {
//     "optimist": {
//       "version": "0.3.7",
//       "dependencies": {
//         "wordwrap": {
//           "version": "0.0.2"
//         }
//       }
//     },
//     "inflection": {
//       "version": "1.2.6"
//     }
//   }
// };

// getDependencies(loremIpsum); // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]