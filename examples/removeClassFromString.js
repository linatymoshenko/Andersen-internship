function removeClass(object, classToRemove) {
  let classNames = object.className.split(" ");
  let sortedArray = [];

  for (let index = 0; index < classNames.length; index++) {
    if (classNames[index] !== classToRemove) {
      sortedArray.push(classNames[index]);
      object.className = sortedArray.join(" ");
    }
  }
}

let object = {
  className: "open menu my menu menu"
};

// removeClass(object, "open");
removeClass(object, "men");

console.log( object.className );