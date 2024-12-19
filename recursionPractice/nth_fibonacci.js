function nthFibonacciTerm(n) {
  if (n < 4) {
    return n === 1 ? 0 : 1;
  }
  
  return nthFibonacciTerm(n - 1) + nthFibonacciTerm(n - 2);
}

console.log(nthFibonacciTerm(11));