function Spy(target, method) {
  let originalFunction = target[method];

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  let result = {
    count: 0
  };

  // replace method with spy method
  target[method] = function() {
    result.count++; // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  };

  return result
}
// var spy = Spy(console, 'error')
//
// console.error('calling console.error')
// console.error('calling console.error')
// console.error('calling console.error')
//
// console.log(spy.count) // 3
module.exports = Spy;