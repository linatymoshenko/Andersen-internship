function anagramClean(array) {
  let result = [];

  array.forEach(function (anagramWord) {
    let element = result.find(word => isAnagram(word, anagramWord));

    if (!element) {
      result.push(anagramWord);
    }
  });

  return result;
}

function isAnagram(word1, word2) {
  return anagramWord(word1) === anagramWord(word2);
}

function anagramWord(word) {
  return word.toLowerCase()
    .split("")
    .sort()
    .join("");
}
let array = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log(anagramClean(array));
