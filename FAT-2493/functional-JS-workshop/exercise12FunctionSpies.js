function Spy(target, method) {
  let originalFunction = target[method];
  
  let result = {
    count: 0
  };
  
  target[method] = function() {
    result.count++; // track function was called
    return originalFunction.apply(this, arguments) // invoke original function
  };

  return result
}

module.exports = Spy;
