const makeCounter = function () {
  const count = { times: 0 };
  const increment = function () {
    this.times++;
    return this.times;
  };
  const decrement = function () {
    this.times--;
    return this.times;
  };
  const reset = function () {
    this.times = 0;
    return this.times;
  };
  return {
    increment: increment.bind(count),
    decrement: decrement.bind(count),
    reset: reset.bind(count),
  };
};

