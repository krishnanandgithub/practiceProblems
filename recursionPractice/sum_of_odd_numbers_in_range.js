function _sumOfOddInRange(from, to) {
  if (from > to) {
    return 0;
  }

  return from + _sumOfOddInRange(from + 2, to);
}

function isOdd(number) {
  if (number < 2) {
    return number === 1;
  }

  return isOdd(number - 2);
}

function modeOf(number) {
  return number < 0 ? - number : number;
}


function sumOfOddInRange(from, to) {
  const start = modeOf(from);
  const sumFromStart = _sumOfOddInRange(from, to);
  const sumFromNextToStart = _sumOfOddInRange(from + 1, to);

  return isOdd(start) ? sumFromStart : sumFromNextToStart ;
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
  testReplace(1, 12, 36);
  testReplace(1, 11, 36);
  testReplace(0, 12, 36);
  testReplace(-6, 5, 0);
  testReplace(-7, 5, -7);
  testReplace(-7, 4, -12);
  testReplace(10, 15, 39);
  testReplace(-20, -15, -51);
  testReplace(15, 9, 0);


}

testAll();
