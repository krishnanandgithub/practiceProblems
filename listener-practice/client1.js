const connection = await Deno.connect({ port: 8000 });

const talkToServer = async () => {
  const request = prompt("👈 request msg: ");
  connection.write(new TextEncoder().encode(request));
  const buff = new Uint8Array(1024);
  const bytesCount = await connection.read(buff);
  const response = new TextDecoder().decode(buff.slice(0, bytesCount));
  console.log("👉 response msg:", response);
  if (request.trim() === "exit") return;

  talkToServer();
};

talkToServer();
