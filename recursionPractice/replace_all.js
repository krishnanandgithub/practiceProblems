function slice(string, from, to) {
  if (from > to) {
    return '';
  }

  return string[from] + slice(string, from + 1, to);
}

function replace(string, charToReplace) {
  if (string === '') {
    return '';
  }
  const restString = slice(string, 1, string.length - 1);
  return charToReplace + replace(restString, charToReplace);
}

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function makeMessage(string, charToReplace, expected, actual) {
  const firstSegment = ' Replace all char in "' + string + '" with "';
  const expectedSegment = charToReplace + '" should be "' + expected + '"';
  const actualSegment = ' and it is "' + actual + '"';

  return firstSegment + expectedSegment + actualSegment;
}

function testReplace(string, charToReplace, expected) {
  const actual = replace(string, charToReplace);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(string, charToReplace, expected, actual));
}

function testAll() {
  testReplace('hello', '-', '-----');
  testReplace('hey bro!', '+', '++++++++');
  testReplace('', '-', '');
  testReplace(' hello world  ', '.', '..............');
}

testAll();
