function _sumOfOddInRange(from, to) {
  if (from > to) {
    return '';
  }

  return from + ' ' + _sumOfOddInRange(from + 2, to);
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

function testFindPosOfZebraInDanger(from, to, expected) {
  const actual = sumOfOddInRange(from, to);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(from, to, expected, actual));
}

function testAll() {
  testFindPosOfZebraInDanger(1, 12, '1 3 5 7 9 11 ');
  testFindPosOfZebraInDanger(1, 11, '1 3 5 7 9 11 ');
  testFindPosOfZebraInDanger(0, 12, '1 3 5 7 9 11 ');
  testFindPosOfZebraInDanger(-6, 5, '-5 -3 -1 1 3 5 ');
  testFindPosOfZebraInDanger(-7, 5, '-7 -5 -3 -1 1 3 5 ');
  testFindPosOfZebraInDanger(-7, 4, '-7 -5 -3 -1 1 3 ');
  testFindPosOfZebraInDanger(10, 15, '11 13 15 ');
  testFindPosOfZebraInDanger(-20, -15, '-19 -17 -15 ');
  testFindPosOfZebraInDanger(15, 9, '');

}

testAll();
