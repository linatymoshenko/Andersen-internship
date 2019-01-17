function duckCount() {
  let animals = Array.prototype.slice
    .call(arguments);
  let ducks = animals.filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  });
  return ducks.length;
}

module.exports = duckCount;
