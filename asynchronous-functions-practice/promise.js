// const p1 = new Promise((resolve, reject) => {
//   resolve("hello");
// });

// const p2 = new Promise((resolve) => {
//   resolve("this is");
// });

// const p3 = new Promise((resolve) => {
//   resolve("the promise object");
// });

// const p = Promise.all([p1, p2, p3]);

// console.log(p);

// setTimeout(() => {
//   console.log("after set time out", p);
// }, 0);

const p1 = new Promise((resolve, reject) => {
  // reject("rejection");
  resolve("resolution");
});

const display1 = (msg) => {
  console.log(msg);
  return "display1 return";
};

const display2 = (msg) => {
  console.log(msg);
  return "display2 return";
};

const display3 = (msg) => {
  console.log(msg);
  return "display3 return";
};

const runAnyway = (x) => {
  console.log("finally get called:", x);
  return "finally return";
};

const handleError = (error) => {
  console.log("catch get called:", error);
  return "catch return";
};

const p = p1.then(display1).catch(handleError).then(display2).then(display3)
  .finally(() => {
    console.log("finally get called:");
  }).then(display3).catch(handleError);
