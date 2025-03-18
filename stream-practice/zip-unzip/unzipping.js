const zippedFile = await Deno.open("./zipped_data.txt");
const unzippedFile = await Deno.open("./unzipped_data.txt", {
  write: true,
  create: true,
});

zippedFile.readable
  .pipeThrough(new DecompressionStream("gzip"))
  .pipeTo(unzippedFile.writable);
