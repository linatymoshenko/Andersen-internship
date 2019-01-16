const _ = require("lodash");

const worker = function(characters) {
  return _.sortBy(characters, "quantity").reverse();
};

const worker2 = function(characters) {
  return _.orderBy(characters, "quantity", ["desc"]);
};

module.exports = worker;
module.exports = worker2;
