let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };

let people = [ vasya , masha , vovochka ];

function compareByAge(person1, person2) {
  if (person1.age < person2.age) {
    return -1;
  }

  if (person2.age < person1.age) {
    return 1;
  }

  return 0;
}

people.sort(compareByAge);

console.log(people[0].age);
