const greet = (request) => {
  const body = `<h1>Hello guys!</h1>`;
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
};

const home = (request) => {
  const file = Deno.readFileSync("./index.html");
  return new Response(file, {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
};

const style = (request) => {
  const file = Deno.readFileSync("./style.css");
  return new Response(file, {
    status: 200,
    headers: { "content-type": "text/css" },
  });
};

const error = (request) => {
  const body = "<h1>Not Found</h1>";
  return new Response(body, {
    status: 404,
    headers: {
      "content-type": "text/html",
    },
  });
};

const script = (request) => {
  const file = Deno.readTextFileSync("./script.js");
  return new Response(file, {
    status: 200,
    headers: {
      "content-type": "text/javascript",
    },
  });
};

const handler = (pathname) => {
  console.log("handler called for:", pathname);
  const response = {
    "/greet": greet,
    "/index.html": home,
    "/style.css": style,
    "script.js": script,
  };

  return response[pathname];
};

const serve = (port) => {
  Deno.serve({ port }, (request) => {
    request._url = new URL(request.url);

    if (request.method === "GET") {
      return handler(request._url.pathname)(request);
    }

    return error();
  });
};

serve(8000);
