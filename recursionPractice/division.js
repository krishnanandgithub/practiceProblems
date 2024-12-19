function divide(dividend, divisor) {
  if (divisor === 0) {
    return Infinity;
  }
  if (dividend < 0) {
    return -1;
  }

  return divide(dividend - divisor, divisor) + 1;
}

console.log(divide(0, 2));