function camelize(string) {
    let array = string.split("-");

    for (let index = 1; index < array.length; index++) {
      array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1);
    }

    return array.join("")
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
