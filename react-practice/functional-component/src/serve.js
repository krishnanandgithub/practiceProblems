const handler = (_req) => {
  return new Response("hello world", {
    headers: {
      "content-type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};

Deno.serve({ port: 8000 }, handler);
