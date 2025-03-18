const file1 = await Deno.open("./dict_words.txt", { read: true });
const file2 = await Deno.open("text.txt", {
  write: true,
  create: true,
  append: true,
});

await file1.readable.pipeTo(file2.writable)