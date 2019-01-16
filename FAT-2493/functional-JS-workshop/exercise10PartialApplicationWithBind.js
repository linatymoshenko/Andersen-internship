function logger(namespace) {
  return console.log.bind(console, namespace);
}
// var info = logger('INFO:')
// info('this is an info message')
module.exports = logger;
