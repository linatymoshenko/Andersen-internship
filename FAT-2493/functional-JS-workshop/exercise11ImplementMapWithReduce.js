function arrayMap(arr, callback) {
  return arr.reduce(function (accumulator, current) {
    accumulator.push(callback.call(null, current));
    return accumulator;
  }, []);
}
// var nums = [1,2,3,4,5];
// var output = arrayMap(nums, function double(item) {
//   return item * 2
// })
module.exports = arrayMap;

// module.exports = function arrayMap(arr, fn) {
//   return arr.reduce(function (prev, curr) {
//     prev.push(fn.call(null, curr));
//     return prev;
//   }, []);
// };