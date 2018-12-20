let vasya = {name: "Вася", age: 23};
let masha = {name: "Маша", age: 18};
let vovochka = {name: "Вовочка", age: 6};

let people = [vasya, masha, vovochka];

people.sort((person1, person2) => person1.age - person2.age);

console.log(people[0].age);
