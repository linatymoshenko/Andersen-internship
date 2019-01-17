function repeat(operation, num) {

  return function () {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num)
  };
}

function trampoline(fn) {
  let result = fn();
  while (typeof result === 'function') {
    result = result()
  }

  return result
}

function testTrampoline(operation, num) {
  trampoline(function () {
    return repeat(operation, num)
  })
}

module.exports = testTrampoline;