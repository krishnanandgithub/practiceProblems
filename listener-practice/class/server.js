class Server {
  #port;
  #listener;
  constructor(port) {
    this.#port = port;
  }

  async listen() {
    this.#listener = await Deno.listen({ port: this.#port });
  }
}
