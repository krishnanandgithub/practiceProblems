class Student {
  public id: number;
  constructor(id: number) {
    this.id = id;
  }
}

// function fun(Student: a): number;

const fun = () => {
  const student = new Student(2);
  // s = student;
  return 0;
};

const main = () => {
  const stu = new Student(1);
  fun();
  console.log(stu.id);
};

main();
