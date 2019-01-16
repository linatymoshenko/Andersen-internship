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

// function curryN(fn, n) {
//   n = n || fn.length;
//   return function curriedN(arg) {
//     if (n <= 1) return fn(arg);
//     return curryN(fn.bind(this, arg), n - 1)
//   }
// }

// function printFullName(firstName, middleName, lastName) {
//   console.log(`${firstName} ${middleName} ${lastName}`);
// }
//
// function curryN(parametersAmount, curryFunction) {
//   return function fn() {
//     if (arguments.length < parametersAmount) {
//       return fn.bind(null, ...arguments);
//     } else {
//       return curryFunction(...arguments);
//     }
//   }
// }
//
// const curriedPrintFullName = curryN(3, printFullName);
//
// curriedPrintFullName("Harry")("James")("Potter");