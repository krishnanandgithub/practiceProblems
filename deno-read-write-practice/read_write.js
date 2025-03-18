const read = () => {
  const [path] = Deno.args;
  const msg = Deno.readTextFileSync(path);
  return msg;
};

console.log(read());
//deno run --allow-read read_write.js "./msg/msg.txt"

const write = () => {
  const [path, msg] = Deno.args;
  Deno.writeTextFileSync(path, msg, { create: false, append: false });
};

// write();
//deno run --allow-write read_write.js "./msg/write_msg.txt" "This is a new line and msg"
