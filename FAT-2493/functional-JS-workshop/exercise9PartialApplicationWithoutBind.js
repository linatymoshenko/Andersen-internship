let slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    let argumentsArray = slice.call(arguments);
    let logArray = [namespace].concat(argumentsArray);
    console.log.apply(null, logArray);
  }
}

module.exports = logger;
