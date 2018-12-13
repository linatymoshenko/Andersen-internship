let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  do {
    console.log(list.value);
  } while (list = list.next);
}

function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}

function printReverseListRecursion(list) {
  if (list.next) {
    printReverseListRecursion(list.next);
  }

  console.log(list.value);
}

function printReverseList(list) {
  let array = [];

  do {
    array.unshift(list.value);
  } while (list = list.next);

  array.forEach((element) => console.log(element));

}

printList(list);
printListRecursion(list);
printReverseListRecursion(list);
printReverseList(list);
