enum Direction1 {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

enum Direction2 {
  NORTH = 5,
  EAST,
  SOUTH,
  WEST,
}

enum Direction3 {
  NORTH = "north",
  EAST = "east",
  SOUTH = "south",
  WEST = "west",
}

enum Direction4 {
  NORTH = 5,
  EAST = 5,
  SOUTH,
  WEST,
}

enum Direction5 {
  HELLO = "north",
  NORTH = "north",
  EAST = "east",
  SOUTH = "south",
  WEST = "west",
}

const rightOf = (b: Direction1) => {
  switch (b) {
    case Direction1.NORTH:
      return Direction1.EAST;
    case Direction1.EAST:
      return Direction1.SOUTH;
    case Direction1.SOUTH:
      return Direction1.WEST;
    case Direction1.WEST:
      return Direction1.NORTH;
  }
};

console.log(Direction1[rightOf(Direction1.EAST)]);
console.log(rightOf(Direction1.SOUTH));
console.log(Direction1);
console.log(Direction2);
console.log(Direction3);
console.log(Direction4);
console.log(Direction5);
