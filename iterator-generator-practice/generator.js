const _range = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
};

const _r = _range();
console.log(_r);
console.log(_r.next());

const range = function* (from, to) {
  let i = from;
  while (i < to) {
    yield i++;
  }
};

const r = range(1, 10);
console.log([...r]);
