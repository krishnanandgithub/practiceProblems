
function sum(num1, num2) {
  if (num2 <= 0) {
    return num2 === 0 ? num1 : sum(num1, num2 + 1) - 1;
  }

  return sum(num1, num2 - 1) + 1;
} 

function getMark(hasPssed) {
  return hasPssed ? '✅' : '❌';
}

function testSum(num1, num2, expected) {
  const actual = sum(num1, num2);
  const hasPssed = expected === actual;
  console.log(getMark(hasPssed), expected, actual);
}

function forPositiveNumbers() {
  testSum(3, 5, 8);
  testSum(12, 23, 35);
  testSum(14, 6, 20);
}

function forNegativeNumbers() {
  testSum(-3, 5, 2);
  testSum(17, -13, 4);
  testSum(-3, -6, -9);
}

function testAll() {
  forPositiveNumbers();
  forNegativeNumbers();
}

testAll();