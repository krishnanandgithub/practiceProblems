import p from "./data_1.json" with { type: "json" };

const personInfo = (person) => {
  const jsonString = JSON.stringify(person);
  const objectFromJsonString = JSON.parse(jsonString);
  console.log("Person Object: ", person);
  console.log("JSON String of person: ", jsonString);
  console.log("Object from JSON String: ", objectFromJsonString);
};

personInfo(p);
