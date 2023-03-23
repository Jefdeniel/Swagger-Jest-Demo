import { cloneArray } from "./CloneArray.js";

const array = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];
const newArray = cloneArray(array);

test("check if new array is a clone of the original one", () => {
  expect(newArray).toEqual(array);
});
