function isEven(number) {
  if (number <= 1) {
    return number === 0;
  }

  return isEven(number - 2);
}

console.log(isEven(5));
