import { EXTENDED_MATRIX } from "../utils/constants/constants";
import { getRows } from "./rows";

describe("getRows", () => {
  const ORDERED_BY_ROWS = [
    ["A", "B", "C", "A", "B"],
    ["D", "E", "F", "B", "C"],
    ["G", "H", "I", "C", "D"],
    ["G", "H", "I", "C", "F"],
    ["G", "H", "I", "C", "F"],
  ];
  it("should return the rows from the matrix", () => {
    expect(getRows(EXTENDED_MATRIX)).toEqual(ORDERED_BY_ROWS);
  });
  it("should return the rows with the same length from the matrix", () => {
    expect(getRows(EXTENDED_MATRIX).length).toEqual(ORDERED_BY_ROWS.length);
  });
});
