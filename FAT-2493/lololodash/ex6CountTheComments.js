const _ = require("lodash");

const worker = function(collection) {
  return _.chain(collection)
    .groupBy("username")
    .map(function(item, name) {
      return {
        username: name,
        comment_count: _.size(item)
      };
    })
    .orderBy("comment_count", ["desc"]);

};

module.exports = worker;
