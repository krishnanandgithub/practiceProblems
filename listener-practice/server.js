const listener = Deno.listen({
  port: 8000,
});

let connectionId = 1;

const handleConnection = async (connection, clientId) => {
  const buf = new Uint8Array(1024);
  const bytesCount = await connection.read(buf);
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  const msg = decoder.decode(buf.slice(0, bytesCount));
  if (msg.trim() === "exit") {
    await connection.write(encoder.encode("Bye"));
    connection.close();
    return;
  }

  console.log(`👉 client: ${clientId} request >`, msg);
  const responseMsg = prompt("👈 response msg:");

  connection.write(
    encoder.encode(responseMsg + "\n"),
  );

  handleConnection(connection, clientId);
};

for await (const connection of listener) {
  handleConnection(connection, connectionId++);
}
