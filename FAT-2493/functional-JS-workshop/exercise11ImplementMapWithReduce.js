function arrayMap(arr, callback) {
  return arr.reduce(function (accumulator, current) {
    accumulator.push(callback.call(null, current));
    return accumulator;
  }, []);
}

module.exports = arrayMap;
