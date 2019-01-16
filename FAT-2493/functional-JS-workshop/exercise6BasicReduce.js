function countWords(inputWords) {
  return inputWords.reduce((countAmount, word) => {
    if (!countAmount[word]) {
      countAmount[word] = 1
    } else {
      countAmount[word] += 1
    }
    return countAmount;
  }, {});
}

module.exports = countWords;
