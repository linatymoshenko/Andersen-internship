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

function printList(originalList) {
  let list = originalList;
  do {
    console.log(list.value);
    list = list.next;
  } while (list);
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

function printReverseList(originalList) {
  let list = originalList;
  let array = [];

  do {
    array.unshift(list.value);
    list = list.next;
  } while (list);

  console.log(array);

}

printList(list);
printListRecursion(list);
printReverseListRecursion(list);
printReverseList(list);
