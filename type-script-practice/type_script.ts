const num: number = 5;
const name: string = "Ashutosh";
const numbers: number[] = [1, 2, 3, 4];
const isMonday: boolean = true;
const person: { name: string; age: number } = { name: "Surendra", age: 23 };

type Person = { name: string; age: number; address: string };

type Prime = (num: number) => boolean;

const isPrime: Prime = (x) => {
  if (x < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }

  return true;
};

console.log(isPrime(11));

const fn: (x: number, y: number, z: number) => number[] = (a, b, c) => {
  console.log(a, b, c);
  return [a, b, c];
};

console.log(fn(...[1, 2, 3]));

type Spreader = (...x: number[]) => number;

const fun: Spreader = (...numbers) => {
  return numbers.reduce((s, n) => s + n, 0);
};

console.log(fun(1, 2, 3, 50));
