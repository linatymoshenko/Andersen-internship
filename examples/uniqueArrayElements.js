function unique(array) {
  let result = {};
  array.forEach((element) => result[element] = element);
  return Object.keys(result);
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

console.log( unique(strings) ); // кришна, харе, 8-()