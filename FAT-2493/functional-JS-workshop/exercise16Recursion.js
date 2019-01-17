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
}

module.exports = getDependencies;
