const range = (from, to) => {
  let i = from;
  let done = false;

  return {
    next() {
      done = i > to;
      return { value: !done ? i++ : undefined, done };
    },
  };
};

const r = range(1, 5);
