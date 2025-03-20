import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert";
import { add, isEven, isValidVoter } from "../src/operations.js";

describe("add()", () => {
  it("should be true", () => {
    assertEquals(add(3, 5), 8);
  });
});

describe("isEven()", () => {
  it("should be false", () => {
    assertEquals(isEven(3), false);
  });

  it("should be true", () => {
    assertEquals(isEven(4), true);
  });
});

describe("isValidVoter()", () => {
  it("should be true", () => {
    assertEquals(isValidVoter(10), "below 18");
  });

  // it("should be true", () => {
  //   assertEquals(isValidVoter(18), "just 18");
  // });

  // it("should be true", () => {
  //   assertEquals(isValidVoter(43), "above 18");
  // });
});
