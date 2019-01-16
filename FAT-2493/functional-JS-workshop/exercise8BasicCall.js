function duckCount() {
  let animals = Array.prototype.slice
    .call(arguments);
  let ducks = animals.filter(function (obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  });
  return ducks.length;
}
// var notDuck = Object.create({quack: true})
// var duck = {quack: true}
// duckCount(duck, notDuck) // 1
module.exports = duckCount;
