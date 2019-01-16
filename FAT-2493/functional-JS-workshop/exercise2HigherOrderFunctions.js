function repeat(operation, num) {
  for (let index = 0; index <= num; index++) {
    operation();
  }
}

// function repeat(operation, num) {
//   return function() {
//     if (num <= 0) return;
//     operation();
//     return repeat(operation, --num)
//   }
// }

module.exports = repeat;
