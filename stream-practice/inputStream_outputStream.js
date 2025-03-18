const text = await Deno.stdin.readable;
const file = await Deno.open("write.txt", {
  create: true,
  write: true,
  append: true,
});

await text.pipeTo(file.writable);

const writable = await Deno.stdout.writable;
const content = await Deno.open("dict_words.txt", {
  read: true,
});

content.readable.pipeTo(writable);
