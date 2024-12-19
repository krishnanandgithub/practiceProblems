function _sumOfOddInRange(from, to) {
  if (from > to) {
    return 0;
  }

  return from + _sumOfOddInRange(from + 2, to);
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
  return isOdd(start) ? _sumOfOddInRange(from, to) : _sumOfOddInRange(from + 1, to);
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

function testReplace(from, to, expected) {
  const actual = sumOfOddInRange(from, to);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(from, to, expected, actual));
}

function testAll() {
  testReplace(1, 12, 42);
  testReplace(1, 11, 30);
  testReplace(0, 12, 42);
  testReplace(-6, 5, -6);
  testReplace(-7, 5, -6);
  testReplace(-7, 4, -6);
  testReplace(10, 15, 36);
  testReplace(-20, -15, -54);
  testReplace(15, 9, 0);

}

testAll();
