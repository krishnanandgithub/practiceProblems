import p from "./data_2.json" with { type: "json" };

const getInfo = (person) => {
  const [key, value] = Deno.args;
  person[key] = value;
  const string = JSON.stringify(person);
  return string;
};

console.log(getInfo(p));