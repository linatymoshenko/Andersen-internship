const _ = require("lodash");

const worker = function (inputVariable) {
  let myTemplate = "Hello <%= name %> (logins: <%= login.length %>)";

  return _.template(myTemplate)(inputVariable);
};

module.exports = worker;
