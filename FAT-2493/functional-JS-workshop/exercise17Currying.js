function curryN(functionToCurry, argumentsNumber) {
  argumentsNumber = argumentsNumber || functionToCurry.length;
  return function fn() {
    if (arguments.length < argumentsNumber) {
      return fn.bind(null, ...arguments);
    } else {
      return functionToCurry(...arguments)
    }
  }
}

module.exports = curryN;
