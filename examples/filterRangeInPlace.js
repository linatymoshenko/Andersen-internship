function filterRangeInPlace(array, fromNumber, toNumber) {
  
  for (let index = 0; index < array.length; index++) {
    if (array[index] < fromNumber || array[index] > toNumber) {
      array.splice(index, 1);
    }
  }
}

array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4);

console.log(array);
