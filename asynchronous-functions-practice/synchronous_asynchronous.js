console.log("synchronous1");

setTimeout(() => {
  for (let i = 0; i < 10000000000; i++) {
  }
  console.log("asynchronous");
}, 1);

console.log("synchronous2");