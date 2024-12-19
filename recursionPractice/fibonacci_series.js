function firstNFibonacci(n) {
  if (n < 4) {
    return n === 1 ? 0 : 1;
  }

  return firstNFibonacci(n - 1) + firstNFibonacci(n - 2);
}

console.log(firstNFibonacci(10));