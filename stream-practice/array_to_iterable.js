const array = new Array(5).fill(1);
const iter = array[Symbol.iterator]();
console.log(iter);
console.log([...iter]);
