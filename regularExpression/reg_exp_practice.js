const words = [
  "cool",
  "fool",
  "hello",
  "hell",
  "good",
  "foool",
  "haiaia",
  "coool",
  "fooool",
  "cooool",
];

const isExactly2CharRepeat = (words) =>
  words.filter((e) => {
    const regExp1 = /(\w)\1{1}/;
    const regExp2 = /(\w)\1{2}/;
    return regExp1.test(e) && !regExp2.test(e);
  });

console.log(isExactly2CharRepeat(words));

const isDivBy2 = (number) => /^(..)*$/.test(" ".repeat(number));
const isDivBy3 = (number) => /^(...)*$/.test(" ".repeat(number));
