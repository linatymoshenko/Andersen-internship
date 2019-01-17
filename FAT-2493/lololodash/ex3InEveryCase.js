const _ = require("lodash");

const worker = function(cities) {
  return _.forEach(
    cities,
    function(city) {
      if (city.population > 1) {
        return city.size = "big"
      } else if (city.population < 0.5) {
        city.size = "small"
      } else {
        city.size = "med"
      }
    }
  );
};

module.exports = worker;
