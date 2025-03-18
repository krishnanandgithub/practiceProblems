const add = (a, b) => {
  return a + b;
};

const main = (args) => {
  const numbers = args.map(Number);
  const sum = numbers.reduce(add, 0);
  console.log(sum);
};

main(Deno.args);
