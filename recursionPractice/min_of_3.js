function minOf2(num1, num2) {
  return num1 < num2 ? num1 : num2;
}

function minOfThree(num1, num2, num3) {
  return minOf2(num1, minOf2(num2, num3));
}

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function makeMessage(num1, num2, num3, expected, actual) {
  const firstSegment = ' Min of "' + num1 + '", "' + num2 + '" and "' + num3;
  const expectedSegment = '" should be "' + expected + '"';
  const actualSegment = ' and it is "' + actual + '"';

  return firstSegment + expectedSegment + actualSegment;
}

function testReplace(num1, num2, num3, expected) {
  const actual = minOfThree(num1, num2, num3);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(num1, num2, num3, expected, actual));
}

function testAll() {
  testReplace(1, 12, 42, 1);
  testReplace(1, 103, 30,  1);
  testReplace(100, 12, 42, 12);
  testReplace(-6, 5, -6, -6);
  testReplace(-7, 5, -6, -7);
  testReplace(-7, -4, -6, -7);
  testReplace(0, -15, -36, -36);
  testReplace(-20, -15, -54, -54);
  testReplace(15, 9, 0, 0);
  testReplace(9, 9, 9, 9);

}

testAll();
