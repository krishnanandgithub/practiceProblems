// const stream = new ReadableStream({
//   start(controller) {
//     const encoder = new TextEncoder();
//     controller.enqueue(encoder.encode("hello"));
//     controller.enqueue(encoder.encode("world"));
//   },
// });

// stream.pipeTo(Deno.stdout.writable);

const writableStream = new WritableStream({
  start(controller) {
    const encoder = new TextEncoder();
    controller.enqueue(encoder.encode("hello"));
    controller.enqueue(encoder.encode(" "));
    controller.enqueue(encoder.encode("world"));
  },
});

await Deno.stdin.readable.pipeTo(writableStream);
