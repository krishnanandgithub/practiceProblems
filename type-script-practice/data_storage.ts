import _ from "lodash";

type Person = {
  name: string;
  age: number;
  address?: string;
};

class Storage<T extends Person> {
  private persons: T[];
  constructor() {
    this.persons = [];
  }

  add(person: T) {
    this.persons.push(person);
  }

  get(person: string) {
    return _.find(this.persons, (p: T) => p.name === person);
  }

  remove(person: string) {
    return _.remove(this.persons, (p: T) => p.name === person);
  }

  all() {
    return this.persons;
  }
}

const storage = new Storage<Person>();
storage.add({ name: "Shiva", age: 22 });
storage.add({ name: "Ganesha", age: 24 });
console.log(storage.get("Shiva"));
console.log(storage.all());
