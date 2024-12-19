function average(num1, num2) {
  if (num1 === num2) {
    return num1
  }

  return average(num1 + 0.5, num2 - 0.5);
}

function findAverage(num1, num2) {
  if (num1 > num2) {
    return average(num2, num1)
  }

  return average(num1, num2);
}

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function makeMessage(num1, num2, expected, actual) {
  const firstSegment = ' Average of "' + num1 + '" and "' + num2;
  const expectedSegment = '" should be "' + expected + '"';
  const actualSegment = ' and it is "' + actual + '"';

  return firstSegment + expectedSegment + actualSegment;
}

function testReplace(num1, num2, expected) {
  const actual = findAverage(num1, num2);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(num1, num2, expected, actual));
}

function testAll() {
  testReplace(0, 1, 0.5);
  testReplace(1, 2, 1.5);
  testReplace(12, 27, 19.5);
  testReplace(3, 7, 5);
  testReplace(3, 8, 5.5);
 
}

testAll();
