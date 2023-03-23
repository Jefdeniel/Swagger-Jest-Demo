import { compactArray } from "./CompactArray.js";

// Sample array
var arr = [
  1,
  2,
  ,
  3,
  ,
  -4,
  "",
  null,
  ,
  0,
  ,
  false,
  undefined,
  5,
  ,
  -5,
  6,
  "",
  7,
  ,
];

// Performing filtration

test("compact array", () => {
  expect(compactArray(arr)).toEqual([1, 2, 3, -4, 5, -5, 6, 7]);
});
