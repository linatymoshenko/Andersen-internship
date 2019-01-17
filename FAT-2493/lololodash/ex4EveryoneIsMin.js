const _ = require("lodash");

const worker = function (temperature) {
  const temperatureChecking = (temperature) => temperature > 19;

  let sortedCities = {
    hot: [],
    warm: []
  };

  _.forEach(
    temperature,
    function (city, cityName) {
      if (_.every(city, temperatureChecking)) {
        sortedCities.hot.push(cityName);
      } else if (_.some(city, temperatureChecking)) {
        sortedCities.warm.push(cityName);
      }
    });

  return sortedCities;
};

module.exports = worker;
