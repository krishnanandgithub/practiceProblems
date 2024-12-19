function slice(string, from, to) {
  if (string === '') {
    return '';
  }
  if (from > to) {
    return '';
  }

  return string[from] + slice(string, from + 1, to);
}

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function makeMessage(string, from, to, expected, actual) {
  const firstSegment = ' "' + string + '", from "' + from + '", to "' + to;
  const expectedSegment = '", should be "' + expected + '",';
  const actualSegment = ' and it is "' + actual + '"';

  return firstSegment + expectedSegment + actualSegment;
}

function testReplace(string, from, to, expected) {
  const actual = slice(string, from, to);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(string, from, to, expected, actual));
}

function testAll() {
  testReplace('hello', 1, 3, 'ell');
  testReplace('hello world', 3, 9, 'lo worl');
  testReplace('hello', 4, 1, '');
  testReplace('', 0, 2, '');
 
}

testAll();
