const chars = function (char) {
  return function (times) {
    return char.repeat(times);
  };
};

const sum = function (num1) {
  return function (num2) { return num1 + num2; };
};

const increment = function () {
  let x = 0;
  return function () {
    const y = x++;
    return y;
  };
};

const incrementUpTo = function (number) {
  let x = 0;
  return function () {
    if (x > number) {
      x = 0;
    }
    const y = x++;
    return y;
  };
};

const cycle = function (array) {
  let x = 0;
  return function () {
    if (x >= array.length) {
      x = 0;
    }

    return array[x++];
  };
};

const isPrime = function (num) {
  if (num < 2) {
    return false;
  }
  for (let factor = 2; factor <= Math.sqrt(num); factor++) {
    if (num % factor === 0) {
      return false;
    }
  }

  return true;
};

const getAllPrime = function (numbers) {
  return numbers.filter(isPrime);
};

const isEven = function (num) {
  return (num & 1) === 0;
};

const isSomeEven = function (array) {
  return array.some(isEven);
};

const isEveryEven = function (array) {
  return array.every(isEven);
};

const isOdd = function (num) {
  return (num & 1) === 1;
};

const isSomeOdd = function (array) {
  return array.some(isOdd);
};

const isEveryOdd = function (array) {
  return array.every(isOdd);
};
