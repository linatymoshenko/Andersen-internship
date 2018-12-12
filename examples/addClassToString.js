function addClass(object, newClass) {
  let classNames = object.className.split(" ");

  if (classNames.indexOf(newClass) === -1) {
    classNames.push(newClass);
    object.className = classNames.join(" ");
  }
}

let object = {
  className: "open menu"
};

addClass(object, "new");
addClass(object, "open");
addClass(object, "me");

console.log( object.className );
