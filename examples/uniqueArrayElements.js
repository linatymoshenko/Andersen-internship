function unique(array) {
  let result = {};
  array.forEach((element) => result[element] = element);
  return Object.keys(result);
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

console.log( unique(strings) );
console.log( Array.from(new Set(strings)) );