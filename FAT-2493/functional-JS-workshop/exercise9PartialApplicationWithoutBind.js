let slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    let argumentsArray = slice.call(arguments);
    let logArray = [namespace].concat(argumentsArray);
    console.log.apply(null, logArray);
  }
}

// var info = logger('INFO:')
// info('this is an info message')
// // INFO: this is an info message

module.exports = logger;
