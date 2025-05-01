const port = 8000;
const listener = Deno.listen({ port });
console.log("server is listening on: ", listener.addr.hostname, ":", port);

const handleConnection = async (conn) => {
  for await (const chunk of conn.readable) {
    console.log(new TextDecoder().decode(chunk));
    const response =
      `http/1.1 200 OK\r\nContent-Type:text/html\r\n\r\n<h1>Hello</h1><p>this is para</p><iframe width="560" height="315" src="https://www.youtube.com/embed/R6P76P0Q5jk?si=Zj8XM8IW9Y1_uOcl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    await conn.write(new TextEncoder().encode(response));
  }
};

for await (const conn of listener) {
  handleConnection(conn);
}
