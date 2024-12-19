function isNotDivisible(dividend, divisor) {
  return dividend % divisor !== 0;
}

function isNotDivisibleInRange(number, from, to) {
  if (from > to) {
    return true;
  }
  if (isNotDivisible(number, from)) {
    return isNotDivisibleInRange(number, from + 1, to);
  }

  return false;
}
 
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  return isNotDivisibleInRange(n, 2, n ** 0.5);
}

console.log(isPrime(10));
console.log(isPrime(3));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(15));

