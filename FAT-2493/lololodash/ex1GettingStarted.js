const _ = require("lodash");

const worker = function(arr) {
  return _.filter(arr, {active: true});
};

module.exports = worker;
