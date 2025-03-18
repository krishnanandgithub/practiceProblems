const text = "Hello World this is a text line for practicing enc and dec";

const encoding = new TextEncoder("utf-8").encode(text);
console.log(encoding);

const decoding = new TextDecoder("utf-8").decode(encoding);
console.log(decoding);
