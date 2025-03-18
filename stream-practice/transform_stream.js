const file = await Deno.open("stream.js", { read: true });

const upperCase = new TransformStream({
  transform(chunk, controller) {
    const text = new TextDecoder().decode(chunk);
    controller.enqueue(new TextEncoder().encode(text.toUpperCase()));
  },
});

await file.readable.pipeThrough(upperCase).pipeTo(Deno.stdout.writable);
