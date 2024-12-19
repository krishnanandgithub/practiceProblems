//-------------------AscendingOrder------------------

const sortInAscending = function (array) {
  return array.sort(function (a, b) {
    return a - b;
  });
};

const numbers1 = [3, 8, 1, 9, 2, 8, 3, 7, 4, 5];
const numbers2 = [0, 4, -1, 3, -2, -4, 1, -3, 2];

console.log(numbers1);
console.log(sortInAscending(numbers1));
console.log(numbers1);
console.log('\n' + '-'.repeat(90), '\n');
console.log(numbers2);
console.log(sortInAscending(numbers2));
console.log(numbers2);

//-----------------------Descending Order-----------------

const sortInDescending = function (array) {
  return array.sort(function (a, b) {
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return 1;
    }

    return -1;
  });
};

const numbers3 = [3, 8, 1, 9, 2, 8, 3, 7, 4, 5];
const numbers4 = [0, 4, -1, 3, -2, -4, 1, -3, 2];

console.log(numbers3);
console.log(sortInDescending(numbers3));
console.log(numbers3);
console.log('\n' + '-'.repeat(90), '\n');
console.log(numbers4);
console.log(sortInDescending(numbers4));
console.log(numbers4);

//-------------------------Mixed Ascending Order------------

const sortInMixedAscending = function (numbers) {
  return numbers.sort(function (a, b) {
    return Math.abs(a) - Math.abs(b);
  });
};

const numbers5 = [3, 8, 1, 9, 2, 8, 3, 7, 4, 5];
const numbers6 = [0, 4, -1, 3, -2, -4, 1, -3, 2];

console.log(numbers5);
console.log(sortInMixedAscending(numbers5));
console.log(numbers5);
console.log('\n' + '-'.repeat(90), '\n');
console.log(numbers6);
console.log(sortInMixedAscending(numbers6));
console.log(numbers6);

//------------------------Mixed Ascending In Ascending------------------

const sortInMixedAscendingInAscending = function (numbers) {
  return numbers.sort(function (a, b) {
    if (Math.abs(a) === Math.abs(b)) {
      return a - b;
    }
    return Math.abs(a) - Math.abs(b);
  });
};

const numbers7 = [3, 8, 1, 9, 2, 8, 3, 7, 4, 5];
const numbers8 = [0, 4, -1, 3, -2, -4, 1, -3, 2];

console.log(numbers7);
console.log(sortInMixedAscendingInAscending(numbers7));
console.log(numbers7);
console.log('\n' + '-'.repeat(90), '\n');
console.log(numbers8);
console.log(sortInMixedAscendingInAscending(numbers8));
console.log(numbers8);

//-----------------Mixed Ascending In Descending-------------

const sortInMixedAscendingInDescending = function (numbers) {
  return numbers.sort(function (a, b) {
    if (Math.abs(a) === Math.abs(b)) {
      return b - a;
    }
    return Math.abs(a) - Math.abs(b);
  });
};

const numbers9 = [3, 8, 1, 9, 2, 8, 3, 7, 4, 5];
const numbers10 = [0, 4, -1, 3, -2, -4, 1, -3, 2];

console.log(numbers9);
console.log(sortInMixedAscendingInDescending(numbers9));
console.log(numbers9);
console.log('\n' + '-'.repeat(90), '\n');
console.log(numbers10);
console.log(sortInMixedAscendingInDescending(numbers10));
console.log(numbers10);

//--------------------Random Order Sorting----------------

const sortInRandom = function (array) {
  return array.sort(function () {
    return Math.random() - 0.5;
  });
};

const str = 'krishnanand mishra';

console.log(sortInRandom(str.split('')).join(''));
console.log(sortInRandom(str.split('')).join(''));

//-----------------------------Sort Array Inside Array--------------------------

const sort2DArray = function (array) {
  return array.map(sortInAscending);
};

const listOfnumbers = [[1, 9, 8, 3, 4], [5, -3, -5, 2, 4, -2], [1, 3, 4, 1, 2]];

console.log(sort2DArray(listOfnumbers));

//---------------------String Sorting In Ascending------------------------------

const persons = ['Abu', 'Ramnivas', 'Ramsaran', '', ' ', 'abu', 'Ajay', 'ajay'];
const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

console.log(persons.sort());
console.log(sortInAscending(persons));
console.log(sortInAscending(vowels));

//-----------------------String Sorting In Descending---------------------------

console.log(sortInDescending(persons));
console.log(sortInDescending(vowels));

//---------------------------Array Sorting: All Even First----------------------

const isEven = function (number) {
  return (number & 1) === 0;
};

const sortEvenToOdd = function (numbers) {
  return numbers.sort(function (a, b) {
    if (isEven(a)) {
      return -1;
    }

    return 1;
  });
};

const numbers11 = [3, 8, 1, 9, 2, 8, 3, 7, 4, 5];

console.log(sortEvenToOdd(numbers11));

//-----------------Array Sorting: All Even First In Ascending-------------------

const sortEvenToOddInAscending = function (numbers) {
  return numbers.sort(function (a, b) {
    if (isEven(a)) {
      return isEven(b) ? a - b : -1;
    }

    return isEven(b) ? 1 : a - b;
  });
};

const numbers12 = [3, 8, 1, 9, 2, 8, 3, 7, 4, 5];

console.log(numbers12);
console.log(sortEvenToOddInAscending(numbers12));
