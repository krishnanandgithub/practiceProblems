const listener = Deno.listen({
  port: 80,
  hostname: "0.0.0.0",
  transport: "tcp",
});
let connectionId = 0;

const handleConnection = async (connection, clientId) => {
  while (true) {
    const buf = new Uint8Array(30);
    const bytesCount = await connection.read(buf);
    const reader = connection.readable;
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const msg = decoder.decode(buf.slice(0, bytesCount));
    if (msg.trim() === "exit") {
      await connection.write(encoder.encode("Bye\n"));
      connection.close();
      return;
    }

    console.log(`Client Id: ${clientId})`, msg);

    await connection.write(
      encoder.encode(`Server > Client ${clientId}: ${msg}`),
    );

    // const capital = new TransformStream({
    //   transform(chunk, controller) {
    //     const msg = new TextDecoder().decode(chunk);
    //     controller.enqueue(new TextEncoder().encode(msg.toUpperCase()));
    //     controller.close()
    //   },
    // });

    // await reader.pipeThrough(capital).pipeTo(Deno.stdout.writable);
  }
};

for await (const connection of listener) {
  handleConnection(connection, connectionId++);
}
