const h = () => {
  console.log("inside h, before execution");
  try {
    throw throwFn;
    i();
  } catch (err) {
    console.log("Error Occured:", err());
  }
  console.log("inside h after execution");
};

const g = () => {
  console.log("inside g, befor calling h");
  h();
  console.log("inside g after calling h");
};

const f = () => {
  console.log("inside f, befor calling g");
  g();
  console.log("inside f after calling g");
};

const main = () => {
  f();
};

// main();

const throwFn = () => {
  console.log("this is an error");
  return 5;
};

const fn = () => {
  console.log("Before");
  try {
    console.log("Inside try");
    throw throwFn;
    dflkjasdklf();
    return 5;
  } catch (err) {
    try {
      console.log("Inside catch:", err());
    } catch (err1) {
      console.log("Real Error:", err1);
    }
  }
  console.log("After");
  try {
    console.log("hey!");
  } finally {
    console.log("Actual Error");
  }
};

console.log(fn());
