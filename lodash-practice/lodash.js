import _ from "lodash";

const main = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 5, 3, 2, 1, 4];
  console.log(_.max(numbers));
  console.log(_.chunk(numbers, 3));
  console.log(_.compact([0, 1, "", 2, false, 3, null]));
  console.log(_.concat([1, 2, 3], [1, 4, 5]));
  console.log(_.difference());
};

main();
