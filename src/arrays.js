const getNthElement = (index, array) => {
  if (index > array.length) {
    return array
  } else {
    return array[index]
  }
};

const arrayToCSVString = (array) => {
  return array.join(",")
};

const csvStringToArray = (string) => {
  return string.split(",")
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  //array2 = array.map(element)
};

const removeNthElement = (index, array) => {
  return array.splice(index,1)
};

const numbersToStrings = (numbers) => {
  return numbers.toString().split(",")
};

const uppercaseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toUpperCase()
  }
  return strings
};

const reverseWordsInArray = (strings) => {
  //return strings.split("").reverse().join("")
};

const onlyEven = (numbers) => {
  /* for (let i = 0; i < numbers.length; ++i) { 
    if ((numbers[i] % 2) === 0) {
        numbers.push(i);
    }
} */
};

const removeNthElement2 = (index, array) => {
  const array2 = array.filter(arr != array[index])
  return array2
};

const elementsStartingWithAVowel = (strings) => {
  //return strings.filter(strin)
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}
