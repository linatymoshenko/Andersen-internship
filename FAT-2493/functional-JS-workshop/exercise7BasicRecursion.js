function reduce(arr, callback, initial) {
  return (function reduceOne(index, accumulator) {
    if (index > arr.length - 1) {
      return accumulator;
    } // exit from recursion
    let currentValue = arr[index];
    let nextElementIndex = index + 1;
    let callbackResult = callback(accumulator, currentValue, index, arr);
    return reduceOne(nextElementIndex, callbackResult) // calculate & pass values to next step
  })(0, initial) // IIFE. kick off recursion with initial values
}
// reduce(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'], (countAmount, word) => {
//   if (!countAmount[word]) {
//     countAmount[word] = 1
//   } else {
//     countAmount[word] += 1
//   }
//   return countAmount;
// }, {});
module.exports = reduce;

