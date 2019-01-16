function repeat(callback, iterationAmount) {
  if (iterationAmount <= 0) {
    return
  }

  callback()

  // release control every 10 or so
  // iterations.
  // 10 is arbitrary.
  if (iterationAmount % 10 === 0) {
    setTimeout(function() {
      repeat(callback, --iterationAmount)
    })
  } else {
    repeat(callback, --iterationAmount)
  }
}

module.exports = repeat;
