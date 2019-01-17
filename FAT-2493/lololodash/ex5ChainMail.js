const _ = require("lodash");

const worker = function(list) {
  return _.chain(list)
    .map(function(word) {return word + "Chained"})
    .sortBy()
    .toUpper()
    .words()
};

module.exports = worker;
