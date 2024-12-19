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

function getMark(hasPassed) {
  return hasPassed ? '✅' : '❌';
}

function testReplace(string, expected) {
  const actual = reverseString(string);
  const hasPassed = expected === actual;
  const mark = getMark(hasPassed);
  console.log(mark + ' "' + string + '" "' + expected + '" "' + actual + '"');
}

function testAll() {
  testReplace('hello', 'olleh');
  testReplace('hello world', 'dlrow olleh');
  testReplace('hey guys', 'syug yeh');
  testReplace('', '');
  testReplace(' ', ' ');
  testReplace(' a', 'a ');
  testReplace(' aa_aaa', 'aaa_aa ');
}

testAll();
