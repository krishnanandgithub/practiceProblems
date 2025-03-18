setTimeout(() => {
  console.log("executed after 3 sec.");
}, 3000);

setTimeout(
  (a, b) => {
    console.log(`sum of ${a} and ${b} :`, a + b);
  },
  3000,
  5,
  7,
);

//setTimeout(()=>{},time,..args)

setTimeout(
  (a, b) => {
    console.log(`sum of ${a} and ${b} :`, a + b);
  },
  3000,
  ...Deno.args,
);

let count = 5;

const intervaId = setInterval(() => {
  console.log(count);
  count--;
  if (count < 0) {
    clearInterval(intervaId);
  }
}, 1000);

console.log("interval", intervaId);
