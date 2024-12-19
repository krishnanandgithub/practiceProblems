function slice(string, from, to) {
  if (from > to) {
    return '';
  }

  return string[from] + slice(string, from + 1, to);
}

function reverseString(string) {
  if (string === '') {
    return '';
  }
  const lastCharacter = string[string.length - 1];
  const from = 0;
  const to = string.length - 2;

  return lastCharacter + reverseString(slice(string, from, to));
}

function isPalindrome(string) {
  return string + '' === reverseString(string + '');
}

function _isPalindrome(string, start, end) {
  if (start > end) {
    return true;
  }
  if (string[start] === string[end]) {
    return _isPalindrome(string, start + 1, end - 1);
  }

  return false;
}

function isAPalindrom(string) {
  const newString = string + '';
  const startIndex = 0;
  const endIndex = newString.length - 1;

  return _isPalindrome(newString, startIndex, endIndex);
}

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function makeMessage(string, expected, actual) {
  const firstSegment = ' Is "' + string + '" a Palindrom "';
  const expectedSegment = '" should be "' + expected + '"';
  const actualSegment = ' and it is "' + actual + '"';

  return firstSegment + expectedSegment + actualSegment;
}

function testIsTheStringPalindrom(string, expected) {
  const actual = isAPalindrom(string);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + makeMessage(string, expected, actual));
}

function testAll() {
  testIsTheStringPalindrom(1234321, true);
  testIsTheStringPalindrom(134431, true);
  testIsTheStringPalindrom(1234, false);
  testIsTheStringPalindrom('ollo', true);
  testIsTheStringPalindrom('abcdcba', true);
  testIsTheStringPalindrom('hey guys', false);
  testIsTheStringPalindrom('', true);
  testIsTheStringPalindrom(' ', true);
  testIsTheStringPalindrom(' a', false);
  testIsTheStringPalindrom('aaa_aaa', true);
}

testAll();
