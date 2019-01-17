function reduce(arr, callback, initial) {
  return (function reduceOne(index, accumulator) {
    if (index > arr.length - 1) {
      return accumulator;
    } 
    let currentValue = arr[index];
    let nextElementIndex = index + 1;
    let callbackResult = callback(accumulator, currentValue, index, arr);
    return reduceOne(nextElementIndex, callbackResult) 
  })(0, initial) 
}

module.exports = reduce;
