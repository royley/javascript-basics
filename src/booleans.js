const negate = (a) => {
  return !a
};

const both = (a, b) => {
  return a && b
};

const either = (a, b) => {
  return a || b
};

const none = (a, b) => {
  return !(a||b)
};

const one = (a, b) => {
  return (a === true && b === false) || (a === false && b === true)
};

const truthiness = (a) => {
  return !!a
};

const isEqual = (a, b) => {
  return a === b
};

const isGreaterThan = (a, b) => {
  return a > b
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b
};

const isOdd = (a) => {
  if (a % 2 === 1) {
    return true
  } else {
    return false
  }
};

const isEven = (a) => {
  if (a % 2 === 0) {
    return true
  } else {
    return false
  }
};

const isSquare = (a) => {
  if (a === 0) {
    return true
  } else {
  return a > 0 && Math.sqrt(a) % 1 === 0
  }
};

const startsWith = (char, string) => {
  if (char === string.charAt(0)) {
    return true
  } else {
    return false
  }
};

const containsVowels = (string) => {
  return string.toLowerCase().includes("a") || string.toLowerCase().includes("e") || string.toLowerCase().includes("i") || string.toLowerCase().includes("o") || string.toLowerCase().includes("u")
};

const isLowerCase = (string) => {
  return string === string.toLowerCase()
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
}
