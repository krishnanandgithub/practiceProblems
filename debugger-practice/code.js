const factorial = (num) => {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
};

const main = (args) => {
  const [name, ...rest] = args;
  console.log(name, rest);
  console.log(factorial(5));
};

main(Deno.args);