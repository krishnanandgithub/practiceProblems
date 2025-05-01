interface Fn<T> {
  (a: T): T;
}

interface Person {
  name: string;
  age: number;
  [key: string]: any;
}

const identity = <T>(arg: T): T => arg;

const constNum = identity(20);
const constStr = identity("hello");
const num = identity<number>(10);
const num = identity<number[]>([10, 20]);
const str = identity<string>("hello");
const person = identity<Person>({ name: "Surendra", age: 19, city: "RJY" });

interface Comparable {
  lessThan: (n: number) => boolean;
  greaterThan: (n: number) => boolean;
  EqualTo: (n: number) => boolean;
}

class Ratio {
  readonly numerator: number;
  readonly denominator: number;
  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(x: number, y: number) {
    return this.denominator
  }
}
