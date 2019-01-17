const _ = require("lodash");

const worker = function (collection) {
  let collectionAscending = _.sortBy(collection, "income");
  let average = _.meanBy(collectionAscending, (person) => person.income);
  let underperform = _.filter(collectionAscending, (person) => person.income <= average);
  let overperform = _.filter(collectionAscending, (person) => person.income > average);

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  }
};

module.exports = worker;
