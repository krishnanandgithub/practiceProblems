const listener = await Deno.listen({ port: 8000 });

for await (const connection of listener) {
  console.log(connection);
  console.log(connection.write());
}
