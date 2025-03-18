const person = { name: "Ram", age: 24, city: "Bengalore" };

//-------------------Check If key present-----------------------

console.log(
  "name" in person,
  "age" in person,
  "city" in person,
  "address" in person
);

//--------------------Deleting entries from Object--------------

console.log(delete person.name, person);
console.log(delete person.age, person);
console.log(delete person.city, person);
console.log(delete person.phone, person);

//------------------Destructuring Object--------------------------

const p1 = { name: "Krishna", age: 20, city: "Deoria" };
const p2 = { name: "Suraj", age: 19, city: "Lucknow" };
const p3 = { name: "Aman", age: 21, city: "Kanpur" };
const p4 = { name: "Kavya", age: 25, city: "Agra" };

const { name: p1Name, age, city } = p1;
const { name: p2Name, age: p2Age, city: p2City } = p2;
const { name: p3Name, ...p3RestEntries } = p3;
const { name: p4Name, ...p4RestEntries } = p4;

console.log(p1Name, age, city);
console.log(p2Name, p2Age, p2City);
console.log(p3Name, p3RestEntries);
console.log(p4Name, p4RestEntries);

//--------------------Objects properties-------------------------

const person1 = { name: "Krishna", age: 20, city: "Deoria" };
const person2 = { name: "Suraj", age: 19, city: "Lucknow" };

const person1Keys = Object.keys(person1);
const person2Keys = Object.keys(person2);

const person1Values = Object.values(person1);
const person2Values = Object.values(person2);

const person1Entries = Object.entries(person1);
const person2Entries = Object.entries(person2);

console.log(person1Keys);
console.log(person2Keys);

console.log(person1Values);
console.log(person2Values);

console.log(person1Entries);
console.log(person2Entries);

//----------------------------Unique Elements--------------------------------

const names = ["hello", "hello", "hey", "bye"];
const elements = names.reduce((uniqueArray, element) => {
  uniqueArray[element] = true;
  return uniqueArray;
}, {});

const uniqueElements = Object.keys(elements);
