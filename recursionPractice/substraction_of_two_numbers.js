function subtract(num1, num2) {
  if (num2 <= 0) {
    return num2 === 0 ? num1 : subtract(num1, num2 + 1) + 1;
  }

  return subtract(num1, num2 - 1) - 1;
}
console.log(subtract(5, -45));