function _oddInRange(from, to) {
  if (from > to) {
    return '';
  }

  return from + ' ' + _oddInRange(from + 2, to);
}

function isOdd(number) {
  if (number < 2) {
    return number === 0;
  }

  return isOdd(number - 2);
}

function modeOf(number) {
  return number < 0 ? - number : number;
}


function sumOfOddInRange(from, to) {
  const start = modeOf(from);
  return isOdd(start) ? _oddInRange(from, to) : _oddInRange(from + 1, to);
}

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function makeMessage(from, to, expected, actual) {
  const firstSegment = ' Even in range from "' + from + '" to "' + to;
  const expectedSegment = '" should be "' + expected + '"';
  const actualSegment = ' and it is "' + actual + '"';

  return firstSegment + expectedSegment + actualSegment;
}

function testIsEvenInRange(from, to, expected) {
  const actual = sumOfOddInRange(from, to);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(from, to, expected, actual));
}

function testAll() {
  testIsEvenInRange(1, 12, '2 4 6 8 10 12 ');
  testIsEvenInRange(1, 11, '2 4 6 8 10 ');
  testIsEvenInRange(0, 12, '0 2 4 6 8 10 12 ');
  testIsEvenInRange(-6, 5, '-6 -4 -2 0 2 4 ');
  testIsEvenInRange(-7, 5, '-6 -4 -2 0 2 4 ');
  testIsEvenInRange(-7, 4, '-6 -4 -2 0 2 4 ');
  testIsEvenInRange(10, 15, '10 12 14 ');
  testIsEvenInRange(-20, -15, '-20 -18 -16 ');
  testIsEvenInRange(15, 9, '');

}

testAll();
