// const p1 = new Promise((resolve, reject) => {
//   console.log("this is the 1st msg from the 1st promise");
//   resolve(
//     new Promise((res, rej) => {
//       console.log("this is the 2nd msg from the 1st promise");
//       res("inside first promise");
//     }),
//   );
// });

// const p2 = new Promise((res, rej) => {
//   console.log("this is the 1st msg from the 2nd promise");
//   res("inside second promise");
// });

// const p1 = new Promise((resolve, reject) => {
//   resolve(
//     new Promise((res, rej) => {
//       res("inside first promise");
//     }),
//   );
// });

// const p2 = new Promise((res, rej) => {
//   res("inside second promise");
// });

// p1.then(console.log);
// p2.then(console.log);
//promise {promise {"inside first promise"}}

// const p1 = new Promise((resolve, reject) => {
//   resolve(
//     Promise.resolve(
//       new Promise((res, rej) => {
//         res("inside first promise");
//         console.log(4);
//       }),
//     ),
//   );
// });

const p1 = new Promise((res, rej) => {
  // const ob = { name: "krishnanand" };
  // rej("error");
  const a = "hello";
  const b = "world";
  res(a, b);
});

p1.then(console.log);

// const x = p1.then((x) => {
//   console.log("previous resolve", x);
//   return x + " inside first then also";
// }).then(() => {
//   console.log;
//   return 0;
// }, console.log).catch(() => {
//   console.log("inside catch");
//   return 5;
// }).then(console.log);

// p1.then(console.log);
// console.log(x);
