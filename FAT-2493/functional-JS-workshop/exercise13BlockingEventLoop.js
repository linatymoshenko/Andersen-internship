function repeat(callback, iterationAmount) {
  if (iterationAmount <= 0) {
    return
  }

  callback();

  if (iterationAmount % 10 === 0) {
    setTimeout(function() {
      repeat(callback, --iterationAmount)
    })
  } else {
    repeat(callback, --iterationAmount)
  }
}

module.exports = repeat;
