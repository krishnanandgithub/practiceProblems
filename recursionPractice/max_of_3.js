function maxOf2(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function maxOfThree(num1, num2, num3) {
  return maxOf2(num1, maxOf2(num2, num3));
}

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function makeMessage(num1, num2, num3, expected, actual) {
  const firstSegment = ' Max of "' + num1 + '", "' + num2 + '" and "' + num3;
  const expectedSegment = '" should be "' + expected + '"';
  const actualSegment = ' and it is "' + actual + '"';

  return firstSegment + expectedSegment + actualSegment;
}

function testReplace(num1, num2, num3, expected) {
  const actual = maxOfThree(num1, num2, num3);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(num1, num2, num3, expected, actual));
}

function testAll() {
  testReplace(1, 12, 42, 42);
  testReplace(1, 103, 30,  103);
  testReplace(100, 12, 42, 100);
  testReplace(-6, 5, -6, 5);
  testReplace(-7, 5, -6, 5);
  testReplace(-7, -4, -6, -4);
  testReplace(0, -15, -36, 0);
  testReplace(-20, -15, -54, -15);
  testReplace(15, 9, 0, 15);
  testReplace(9, 9, 9, 9);

}

testAll();
