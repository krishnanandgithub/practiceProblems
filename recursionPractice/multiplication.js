function multiply(multiplicand, multiplier) {
  if (multiplier < 1) {
    return 0;
  }

  return multiplicand + multiply(multiplicand, multiplier - 1);
}

console.log(multiply(5, 45));