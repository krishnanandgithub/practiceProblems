const content = await Deno.open("./content.txt");
const zippedFile = await Deno.open("./zipped_data.txt", {
  write: true,
  create: true,
});

content.readable
  .pipeThrough(new CompressionStream("gzip"))
  .pipeTo(zippedFile.writable);
