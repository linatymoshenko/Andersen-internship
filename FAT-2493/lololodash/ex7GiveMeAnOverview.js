const _ = require("lodash");

const worker = function(articles) {
  return _.chain(articles)
    .groupBy("article")
    .map(function(item, name) {
      return {
        article: parseInt(name),
        total_orders: _.reduce(item, function(sum, item) {
          return sum + item.quantity;
        }, 0)
      }
    })
    .orderBy("total_orders", ["desc"]);
};

module.exports = worker;
